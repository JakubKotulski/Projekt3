function minMax(arr){
    const newArray = Array.from(arr);
    newArray.sort((a, b) => a - b);
    return  [newArray[0], newArray.pop()]
}

// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([1]));

const tab = [4, 1, 2, 3, 5, 6, 7];

console.log(minMax(tab));

const even = tab.filter(x => x % 2);
console.log(even);
console.log(tab);