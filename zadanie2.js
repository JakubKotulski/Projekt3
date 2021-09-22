function minMax(arr){
    const newArray = Array.from(arr);
    newArray.sort((a, b) => a - b);
    return  [newArray[0], newArray[newArray.length - 1]]
}
