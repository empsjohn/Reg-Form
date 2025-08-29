<!-- result.php -->
<?php
// Check if form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect data from POST superglobal
    $firstName = htmlspecialchars($_POST['firstName']);
    $middleName = htmlspecialchars($_POST['middleName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $batch = htmlspecialchars($_POST['batch']);
    $tech = htmlspecialchars($_POST['tech']);
    $id = htmlspecialchars($_POST['ID']);
    $contact = htmlspecialchars($_POST['contactNum']);
} else {
    // Redirect if accessed directly
    header("Location: index.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Result</title>
</head>
<body>
    <h1>Registration Details</h1>
    <p><strong>First Name:</strong> <?= $firstName ?></p>
    <p><strong>Middle Name:</strong> <?= $middleName ?></p>
    <p><strong>Last Name:</strong> <?= $lastName ?></p>
    <p><strong>Batch:</strong> <?= $batch ?></p>
    <p><strong>Technology:</strong> <?= $tech ?></p>
    <p><strong>ID Number:</strong> <?= $id ?></p>
    <p><strong>Contact Number:</strong> <?= $contact ?></p>
</body>
</html>
