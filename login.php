<?php

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "speech_game";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user = $_POST['username'];

$sql = "INSERT INTO users (username) VALUES ('$user') ON DUPLICATE KEY UPDATE username = username";

if ($conn->query($sql) === TRUE) {
    echo "User saved successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
