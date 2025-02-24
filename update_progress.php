<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');

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

// Retrieve POST data
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['username'], $data['points'], $data['level'])) {
    $username = $data['username'];
    $points = $data['points']; // Points to be added
    $level = $data['level'];

    // Fetch the current progress from the database
    $stmt = $conn->prepare("SELECT progress FROM users WHERE username = ?");
    $stmt->bind_param("s", $username); // Bind the username as a string
    $stmt->execute();
    $stmt->bind_result($currentProgress);
    $stmt->fetch();
    $stmt->close();

    if ($currentProgress !== null) {
        // Add the new points to the current progress
        $newProgress = $currentProgress + $points;

        // Update the user's progress and level in the database
        $updateStmt = $conn->prepare("UPDATE users SET progress = ?, level = ? WHERE username = ?");
        $updateStmt->bind_param("iss", $newProgress, $level, $username); // Bind the new progress, level, and username
        if ($updateStmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Progress updated', 'newProgress' => $newProgress]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to update progress']);
        }
        $updateStmt->close();
    } else {
        echo json_encode(['success' => false, 'message' => 'User not found']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid input data']);
}

// Close the database connection
$conn->close();
?>
