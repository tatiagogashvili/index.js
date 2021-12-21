function maxNumber(array){
    array.sort(function(a, b) {
        return a - b;
    });
    return array[array.length-1]
}


console.log(maxNumber([23,45,1,2]))
