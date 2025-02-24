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

// Check if both username and password are provided
if (!isset($_GET['username']) || empty($_GET['username']) || !isset($_GET['password']) || empty($_GET['password'])) {
    echo json_encode(["success" => false, "message" => "Username and password are required."]);
    exit;
}

$user = $_GET['username'];
$pass = $_GET['password']; // Get the password from the query string

// Prepare SQL statement to check if user exists
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $user); // Bind the username parameter
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // User exists, check the password
    $row = $result->fetch_assoc();
    
    if ($row['password'] === $pass) {
        // Password matches, return progress and level
        echo json_encode(["success" => true, "message" => "Login successful", "progress" => $row["progress"], "level" => $row["level"], "username" => $row["username"]]);
    } else {
        // Password doesn't match
        echo json_encode(["success" => false, "message" => " Please try with correct Password or with different username as given Username already exists."]);
    }
} else {
    // User does not exist, insert new user with the provided password
    $defaultProgress = 0; // Default initial progress
    $defaultLevel = 'easy'; // Default initial level

    // Prepare SQL to insert the new user
    $insertStmt = $conn->prepare("INSERT INTO users (username, password, progress, level) VALUES (?, ?, ?, ?)");
    $insertStmt->bind_param("ssis", $user, $pass, $defaultProgress, $defaultLevel); // Bind the parameters

    if ($insertStmt->execute()) {
        echo json_encode(["success" => true, "progress" => $defaultProgress, "level" => $defaultLevel, "message" => "User registered successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
    }
}

// Close the connections
$stmt->close();
$conn->close();
?>