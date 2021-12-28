function solveTriangle(angle1, angle2, angle3, perimeterKnown, perimeter, places, degreeInput) {
    Math.rounder = function(value, places) {
        return Math.round((value + Number.EPSILON) * (10 ** places)) / (10 ** places)
    }
    Math.radians = function(degrees) {
        return degrees * Math.PI / 180;
    }
    Math.degrees = function(radians) {
        return radians * 180 / Math.PI;
    }
    Math.csc = function csc(x) {return 1 / Math.sin(x)}
    Math.sec = function sec(x) {return 1 / Math.cos(x)}
    Math.cot = function cot(x) {return 1 / Math.tan(x)}
    
    if(degreeInput){
        angle1 = Math.radians(angle1)
        angle2 = Math.radians(angle2)
        angle3 = Math.radians(angle3)
    }
    
    sideA = Math.sin(angle1)
    sideB = Math.sin(angle2)
    sideC = Math.sin(angle3)
    
    if(sideA<=sideB && sideA<=sideC){
            smallestSide = sideA
        }else if(sideB<=sideA && sideB<=sideC){
            smallestSide = sideB
        }else if(sideC<=sideA && sideC<=sideB){
            smallestSide = sideC
        }
    
    if(perimeterKnown){      
        sideA_output = 'Side A: ' + Math.rounder((sideA * perimeter)/(sideA+sideB+sideC), places).toString() + ' unit(s)'
        sideB_output = 'Side B: ' + Math.rounder((sideB * perimeter)/(sideA+sideB+sideC), places).toString() + ' unit(s)'
        sideC_output = 'Side C: ' + Math.rounder((sideC * perimeter)/(sideA+sideB+sideC), places).toString() + ' unit(s)'
    }else{
        sideA_output = 'Side A: ' + Math.rounder(sideA / smallestSide, places).toString() + ' relative unit(s)'
        sideB_output = 'Side B: ' + Math.rounder(sideB / smallestSide, places).toString() + ' relative unit(s)'
        sideC_output = 'Side C: ' + Math.rounder(sideC / smallestSide, places).toString() + ' relative unit(s)'
    }
    
    document.getElementById("sideA").innerHTML = sideA_output
    console.log(sideA_output)
    document.getElementById("sideB").innerHTML = sideB_output
    console.log(sideB_output)
    document.getElementById("sideC").innerHTML = sideC_output
    console.log(sideC_output)
}