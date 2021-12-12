<html>
<head>
    <title>SAS Triangle</title>
</head>

<body>
    <p>WHOOP IAHU</p>
    <form action="./action_page.php" method="get">
        <p>Side 1</p>
        <input type = "text" name = "side1" id = "side1">
        <p>Contained Angle</p>
        <input type = "text" name = "angle1" id = "angle1">
        <p>Side 2</p>
        <input type = "text" name = "side2" id = "side2">
        <br>
        <br>
        <input type="checkbox" id="degrees" name="degrees" value="True">
        <label for="degrees">Using degrees? (default is radians)</label>
        <br>
        <input type="checkbox" id="termsOfPi" name="termsOfPi" value="True">
        <label for="termsOfPi">Is your measurement in terms of Pi? (input of 3 would be processed as 3π)</label>
        <br>
        <br>
        <input type="submit" value="Submit">
    </form>  
</body>

</html>