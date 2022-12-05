//const { math } = require("../../assets/javascript/math")

//const { math } = require("../../assets/javascript/math")

// class ryFraction{
//     constructor(num, den){
//         this.numerator = num
//         this.denominator = den
//     }

//     toString(){
//         return this.numerator.toString()+"/"+this.denominator.toString()
//     }

//     cbrt(){
//         return new ryFraction(math.cbrt(this.numerator), math.cbrt(this.denominator))
//     }

    
// }

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

// function cubicFormula(){
//     a = parseFloat(document.getElementById("a").value)
//     b = parseFloat(document.getElementById("b").value)
//     c = parseFloat(document.getElementById("c").value)
//     d = parseFloat(document.getElementById("d").value)

//     if(isNaN(a)){a=0}
//     if(isNaN(b)){b=0}
//     if(isNaN(c)){c=0}
//     if(isNaN(d)){d=0}

//     e = math.sqrt(-1)
//     f = new ryFraction(e, 1)
//     console.log(f)

//     h0_0 = 2*b**3 - 9*a*b*c + 27*a**2*d
//     h0_1 = math.sqrt(math.bignumber((2*b**3 - 9*a*b*c + 27*a**2*d)**2 - 4*(b**2 - 3*a*c)**3))

//     h1_0 = math.add(h0_0, h0_1)
//     h1_1 = math.subtract(h0_0, h0_1)

//     h2_0 = new ryFraction(1, (3*a))

//     h3_0 = new ryFraction(h1_0, 2)
//     h3_1 = new ryFraction(h1_1, 2)

//     p = h3_0.cbrt()
//     q = h3_1.cbrt()

//     console.log({h0_0: h0_0.toString(), h0_1: h0_1.toString(), h1_0: h1_0.toString(), h1_1: h1_1.toString(), h2_0: h2_0.toString(), p: p.toString(), q: q.toString()})
// }

function cubicFormula(){
    a = parseFloat(document.getElementById("a").value)
    b = parseFloat(document.getElementById("b").value)
    c = parseFloat(document.getElementById("c").value)
    d = parseFloat(document.getElementById("d").value)

    if(isNaN(a)){a=0}
    if(isNaN(b)){b=0}
    if(isNaN(c)){c=0}
    if(isNaN(d)){d=0}

    a = math.bignumber(a)
    b = math.bignumber(b)
    c = math.bignumber(c)
    d = math.bignumber(d)

    const numb1 = math.bignumber(1)
    const numb2 = math.bignumber(2)
    const numb3 = math.bignumber(3)
    const numb4 = math.bignumber(4)
    const numb9 = math.bignumber(9)
    const numb27 = math.bignumber(27)


    pa = math.subtract(
        math.multiply(numb2, math.pow(b,numb3)),
        math.add(math.multiply(numb9, a, b, c), math.multiply(numb27, math.pow(a,numb2), d))
    )
    pb = math.sqrt(
        math.subtract(
            math.pow(
                math.add(
                    math.subtract(
                        math.multiply(numb2, math.pow(b, numb3)), 
                        math.multiply(numb9, a, b, c)
                    ),
                    math.multiply(numb27, math.pow(a, numb2), d)
                ), 
                numb2
            ),
            math.multiply(
                numb4, 
                math.pow(
                    math.subtract(
                        math.pow(b, numb2),
                        math.multiply(numb3, a, c)
                    ),
                    numb3
                )
            )
        )
    )

    p = math.add(pa, pb)
    
    q = math.subtract(pa, pb)

    console.log({p: p.toString(), q: q.toString()})

    //3a^-1
    t1 = math.divide(numb1, (math.multiply(numb3, a)))
    console.log({t1: t1.toString()})

    p2 = math.divide(p, numb2)
    q2 = math.divide(q, numb2)

    p2 = math.cbrt(p2)
    q2 = math.cbrt(q2)


    x1 = math.subtract(
        math.multiply(-b, t1),
        math.add(
            math.multiply(t1, p2),
            math.multiply(t1, q2)
        )
    )
    
    x2 = math.add(
        math.multiply(-b, t1),
        math.add(
            math.multiply(
                math.divide(
                    math.add(numb1, math.sqrt(-3)),
                    math.multiply(6, a)
                ), 
                p2
            ),
            math.multiply(
                math.divide(
                    math.subtract(numb1, math.sqrt(-3)),
                    math.multiply(6, a)
                ), 
                q2
            ),
        )
    )
    
    x3 = math.add(
        math.multiply(-b, t1),
        math.add(
            math.multiply(
                math.divide(
                    math.subtract(1, math.sqrt(-3)), 
                    math.multiply(6, a)
                ), 
                p2
            ),
            math.multiply(
                math.divide(
                    math.add(1, math.sqrt(-3)),
                    math.multiply(6, a)
                ), 
                q2
            ),
        )
    )  
    
    addResult = ""

    console.log({x1: x1, x2, x3})

    roundDigits = parseInt(document.getElementById('roundDigits').value)

    if(isNaN(roundDigits)){roundDigits=8}

    console.log({roundDigits})

    for(i = 1; i<=3; i++){
        addResult += `<div>x`+i+` = `+eval("math.round(x"+i+", roundDigits)")+`</div>`
    }

    document.getElementById("result").innerHTML = addResult
}