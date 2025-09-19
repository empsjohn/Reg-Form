
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
    <div class="form">
        <h1>REGISTRATION FORM</h1><br>

        <form action="result.php" method="POST">
            <div>
                <div>First Name</div>
                <input type="text" name="firstName" required>
            </div>
            <div>
                <div>Middle Name</div>
                <input type="text" name="middleName">
            </div>
            <div>
                <div>Last Name</div>
                <input type="text" name="lastName" required>
            </div>
            <div>
                <div>Batch</div>
                <input type="text" name="batch" required>
            </div>
            <div>
                <div>Technology</div>
                <select name="tech" required>
                    <option value="" disabled selected></option>
                    <option value="COMPUTER">COMPUTER</option>
                    <option value="ELECTRICAL">ELECTRICAL</option>
                    <option value="ELECTRONICS">ELECTRONICS</option>
                    <option value="MECHANICAL">MECHANICAL</option>
                </select>
            </div>
            <div>
                <div>ID Number</div>
                <input type="text" name="ID" required>
            </div>
            <div>
                <div>Contact Number</div>
                <input type="text" name="contactNum" required>
            </div>

            <br>
            <button type="submit">Submit</button>
        </form>

        <div class="message" id="formMessage"></div>
    </div>

    <script src="assets/js/main2.js"></script>
</body>
</html>

