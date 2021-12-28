function findPage(side1, side2, side3, angle1, angle2, angle3) {
    if(side1 && side2 && side3 && angle1 && angle2 && angle3){
        window.location.href = "./Solved/"
    }else if((side1 && side2 && angle3) || (side2 && side3 && angle1) || (side3 && side1 && angle2)){
        window.location.href = "./SAS/"
    }else if((angle1 && angle2 && side3) || (angle2 && angle3 && side1) || (angle1 && angle3 && side2){
        window.location.href = "./ASA/"
    }else if(side1 && side2 && side3){
        
    }else if(angle1 && angle2 && angle3){
        
    }
}