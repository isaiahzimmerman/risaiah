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