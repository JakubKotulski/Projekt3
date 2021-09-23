function objectToArray(objectVariable){
    let result = Object.keys(objectVariable).map((key) => [String(key), objectVariable[key]]);
    return result
}

console.log(objectToArray({ D: 1, B: 2, C: 3 }));
console.log(objectToArray({ likes: 2, dislikes: 3, followers: 10 }))