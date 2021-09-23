function arrayOfMultiples(number, arrayLength){
    const result = [];
    for(let i = 1; i <= arrayLength; i++){
        result.push(number * i);
    }
    return result
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));