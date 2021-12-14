function solveTriangle(side1, angle3, side2, places, degreeInput, degreeOutput) {
    function rounder(value, places) {
        return Math.round((value + Number.EPSILON) * (10 ** places)) / (10 ** places)
    }
    Math.radians = function(degrees) {
        return degrees * Math.PI / 180;
    }
    Math.degrees = function(radians) {
        return radians * 180 / Math.PI;
    }

    sideA = parseInt(side1)
    sideB = parseInt(side2)
    if(degreeInput){
        angleC = Math.radians(parseInt(angle3))
    }else{
        angleC = parseInt(angle3)
    }

    decPlaces = parseInt(places)
    
    sideC = rounder(Math.sqrt(sideA**2 + sideB**2 - 2*sideA*sideB*Math.cos(angleC)), decPlaces)
    
    angleA = (Math.asin((sideA * Math.sin(angleC)) / sideC))
    
    angleB = (Math.asin((sideB * Math.sin(angleC)) / sideC))
    
    if(degreeOutput) {
        angleA_output = 'Angle A: ' + rounder(Math.degrees(angleA), decPlaces).toString()
        angleB_output = 'Angle B: ' + rounder(Math.degrees(angleB), decPlaces).toString()
    }else{
        angleA_output = 'Angle A: ' + rounder(angleA, decPlaces).toString() + ' (or '+rounder(angleA/Math.PI, decPlaces).toString()+'π)'
        angleB_output = 'Angle B: ' + rounder(angleB, decPlaces).toString() + ' (or '+rounder(angleB/Math.PI, decPlaces).toString()+'π)'
    }
    document.getElementById("sideC").innerHTML = 'Side C: ' + sideC.toString()
    document.getElementById("angleA").innerHTML = angleA_output
    document.getElementById("angleB").innerHTML = angleB_output
    //document.getElementById("angleB").innerHTML = 'Angle B: ' + 'h'
}