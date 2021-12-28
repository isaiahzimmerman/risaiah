function solveTriangle(side1, angle3, side2, places, degreeInput, degreeOutput) {
    Math.rounder = function(value, places) {
        return Math.round((value + Number.EPSILON) * (10 ** places)) / (10 ** places)
    }
    Math.radians = function(degrees) {
        return degrees * Math.PI / 180;
    }
    Math.degrees = function(radians) {
        return radians * 180 / Math.PI;
    }

    sideA = side1
    sideB = side2
    if(degreeInput){
        angleC = Math.radians(angle3)
    }else{
        angleC = angle3
    }

    decPlaces = places
    
    sideC = Math.sqrt(sideA**2 + sideB**2 - 2*sideA*sideB*Math.cos(angleC))
    
    angleA = (Math.asin((sideA * Math.sin(angleC)) / sideC))
    console.log(angleA)
    
    angleB = (Math.asin((sideB * Math.sin(angleC)) / sideC))
    console.log(angleB)
    
    if(degreeOutput) {
        angleA_output = 'Angle A: ' + Math.rounder(Math.degrees(angleA), decPlaces).toString()
        angleB_output = 'Angle B: ' + Math.rounder(Math.degrees(angleB), decPlaces).toString()
    }else{
        angleA_output = 'Angle A: ' + Math.rounder(angleA, decPlaces).toString() + ' (or '+Math.rounder(angleA/Math.PI, decPlaces).toString()+'π)'
        angleB_output = 'Angle B: ' + Math.rounder(angleB, decPlaces).toString() + ' (or '+Math.rounder(angleB/Math.PI, decPlaces).toString()+'π)'
    }
    document.getElementById("sideC").innerHTML = 'Side C: ' + Math.rounder(sideC, decPlaces).toString()
    document.getElementById("angleA").innerHTML = angleA_output
    document.getElementById("angleB").innerHTML = angleB_output
}