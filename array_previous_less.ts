function arrayPreviousLess(inputArray: number[]): number[]{
    const newArray: number[] = [];
    let newArrayReversed: number[] = [];
    for(let i = inputArray.length-1; i > -1; i--){
        if(inputArray[i] > inputArray[i - 1]){
            newArray.push(inputArray[i - 1])
        } else {
            newArray.push(-1)
        }
    }
    newArrayReversed = newArray.reverse();
    return newArrayReversed
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]))