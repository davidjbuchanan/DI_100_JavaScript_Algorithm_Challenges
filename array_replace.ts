function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElement: number): number[]{
    const newArray: number[] = [];
    console.log(elemToReplace)
    console.log(substitutionElement)
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] === elemToReplace){
            newArray.push(substitutionElement)
        } else{
            newArray.push(inputArray[i])
        }
    }
    return newArray
}

console.log(arrayReplace([1, 2, 1], 1, 3))
console.log(arrayReplace([9, 2, 4, 6, 3, 4, 6, 1, 1, 23, 1, 2, 1], 1, 3))