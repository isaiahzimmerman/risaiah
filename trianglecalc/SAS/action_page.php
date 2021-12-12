<html>
<head>
    
</head>
<body>
    <?php
        
        if($_GET['degrees']){
            $angleC = deg2rad($_GET['angle1']);
        }else{
            if($_GET['termsOfPi']){
                $angleC = pi() * $_GET['angle1'];
            }else{
                $angleC = $_GET['angle1'];
            }
        };
        
        $sideA = $_GET['side1'];
        $sideB = $_GET['side2'];
            
        $sideC = sqrt(($sideA ** 2) + ($sideB ** 2) - (2 * $sideA * $sideB * cos($angleC)));
        $angleA = asin(($sideA * sin(angleC))/$sideC);
        echo $sideC;
        echo 'HI';
        echo $angleA;
        echo asin(1);
    ?>
</body>
</html>