const objectToArray = (objectVariable) => Object.keys(objectVariable).map((key) => [key, objectVariable[key]]);

console.log(objectToArray({ D: 1, B: 2, C: 3 }));
console.log(objectToArray({ likes: 2, dislikes: 3, followers: 10 }))