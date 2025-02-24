<?php
header('Content-Type: application/json'); // Ensure the response is JSON
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "speech_game";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

$user = $_GET['username']; // Get the username from the query string

// Check if the user exists
$sql = "SELECT * FROM users ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // User exists, return progress and level
    $row = $result->fetch_assoc();
    echo json_encode(["success" => true, "progress" => $row["progress"], "username" => $row["username"], "level" => $row["level"]]);
} else {
    // User does not exist, insert new user with default progress and level
    $defaultProgress = 0; // Default initial progress
    $defaultLevel = 'easy'; // Default initial level

    $insertSql = "INSERT INTO users (username, progress, level) VALUES ('$user', '$defaultProgress', '$defaultLevel')";

    if ($conn->query($insertSql) === TRUE) {
        echo json_encode(["success" => true, "progress" => $defaultProgress, "level" => $defaultLevel, "message" => "User registered successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $insertSql . "<br>" . $conn->error]);
    }
}

$conn->close();
