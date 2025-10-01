<?php
if(isset($_POST['submit'])) {
    // Allowed file types
    $allowed_types = array('pdf', 'jpg', 'png');

    $target_dir = "uploads/";  // Folder where files will be uploaded
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Check if the file type is allowed
    if (!in_array($fileType, $allowed_types)) {
        echo "Sorry, only PDF, JPG, PNG files are allowed.";
        exit();
    }

    // Check if file already exists
    if (file_exists($target_file)) {
        echo "Sorry, file already exists.";
        exit();
    }

    // Try to upload the file
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file " . htmlspecialchars(basename($_FILES["fileToUpload"]["name"])) . " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Certification</title>
</head>
<body>
    <h2>Upload New Certification</h2>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        <label for="fileToUpload">Select certificate to upload (PDF, JPG, PNG):</label>
        <input type="file" name="fileToUpload" id="fileToUpload" required>
        <input type="submit" value="Upload Certificate" name="submit">
    </form>
</body>
</html>
