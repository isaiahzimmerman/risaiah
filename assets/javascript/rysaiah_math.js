Math.average = function(array){
    var total = 0

    array.forEach(function(currentValue){
        total+=currentValue
    })

    return total/array.length
}

Math.standardDeviation = function(array){
    avgValue = Math.average(array)
    diffSquared = 0

    array.forEach(function(currentValue){
        diffSquared += Math.pow((currentValue - avgValue), 2)
    })

    return Math.sqrt(diffSquared / (array.length))
}

// Math.sqrt = function(z){
    
// }

// class ryFraction{
//     constructor(num, den){
//         this.numerator = num
//         this.denominator = den
//     }

//     toString(){
//         return this.numerator+"/"+this.denominator
//     }
// }

// class ComplexNum{
//     constructor(a, b){
//         this.real = a
//         this.imaginary = b
//     }

//     toString(){
//         return this.real+" + "+this.imaginary+"i"
//     }
// }