function charCount(charToCount, stringToCheck){
    let counter = 0;
    for(let i = 0; i <= stringToCheck.length; i++){
        if(charToCount == stringToCheck[i]){
            counter++
        }
    }
    return counter
}

console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"))