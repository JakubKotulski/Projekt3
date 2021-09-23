function arrayOfMultiples(number, arrayLength){
    const result = [];
    for(let i = 1; i <= arrayLength; i++){
        let numberToPush = number * i;
        result.push(numberToPush);
    }
    return result
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));