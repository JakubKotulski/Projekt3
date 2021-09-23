function danceForCash(input){
    const pinNumber = [];
    const danceMovesTable = ["Shimmy", "Shake", "Pirouette", "Slide", " ", " ", " ", "Pop", " ", "Arabesque"];
    const output = [];
    for(let i = 0; i < input.length; i++){
        pinNumber.push(parseInt(input[i], 10));
    }
    for(let i = 0; i < pinNumber.length; i++){
        let selectedMove = pinNumber[i] + i;
        if(selectedMove > danceMovesTable.length - 1){
            while(selectedMove > danceMovesTable.length - 1){
                selectedMove = selectedMove - danceMovesTable.length;
            }
            output.push(danceMovesTable[selectedMove]);
        }
        else{
            output.push(danceMovesTable[selectedMove]);
        }
        if(output[i] == " " || output.length > 4){
            return "Invalid value"
        }
    }
    
    return output
}

console.log(danceForCash("0000"));
console.log(danceForCash("3856"));
console.log(danceForCash("9999"));
console.log(danceForCash("32a1"))