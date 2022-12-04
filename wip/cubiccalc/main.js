function evalCubic(x){
    return math.add(
        math.add(
            math.multiply(a, math.pow(x, 3)),
            math.multiply(b, math.pow(x, 2))
        ),
        math.add(
            math.multiply(c, x),
            d
        )
    )
}


function cubicFormula(){
    a = parseFloat(document.getElementById("a").value)
    b = parseFloat(document.getElementById("b").value)
    c = parseFloat(document.getElementById("c").value)
    d = parseFloat(document.getElementById("d").value)

    if(isNaN(a)){a=0}
    if(isNaN(b)){b=0}
    if(isNaN(c)){c=0}
    if(isNaN(d)){d=0}

    p = math.add(
        2*b**3 - 9*a*b*c + 27*a**2*d, 
        math.sqrt((2*b**3 - 9*a*b*c + 27*a**2*d)**2 - 4*(b**2 - 3*a*c)**3)
    )
    
    q = math.subtract(
        2*b**3 - 9*a*b*c + 27*a**2*d, 
        math.sqrt((2*b**3 - 9*a*b*c + 27*a**2*d)**2 - 4*(b**2 - 3*a*c)**3)
    )

    //3a^-1
    t1 = 1/(3*a)

    p2 = math.cbrt(math.divide(p, 2))
    q2 = math.cbrt(math.divide(q, 2))


    x1 = math.subtract(
        -b * t1,
        math.add(
            math.multiply(t1, p2),
            math.multiply(t1, q2)
        )
    )
    
    x2 = math.add(
        -b * t1,
        math.add(
            math.multiply(
                math.divide(math.add(1, math.sqrt(-3)), (6*a)), 
                p2
            ),
            math.multiply(
                math.divide(math.subtract(1, math.sqrt(-3)), (6*a)), 
                q2
            ),
        )
    )
    
    x3 = math.add(
        -b * t1,
        math.add(
            math.multiply(
                math.divide(math.subtract(1, math.sqrt(-3)), (6*a)), 
                p2
            ),
            math.multiply(
                math.divide(math.add(1, math.sqrt(-3)), (6*a)), 
                q2
            ),
        )
    )  
    
    addResult = ""

    for(i = 1; i<=3; i++){
        addResult += `<div>x`+i+` = `+eval("x"+i+".toString()")+`</div>`
    }

    document.getElementById("result").innerHTML = addResult
}