function arrayMaximalAdjacentDifference(inputArray: number[]): number {

    const max: number[] = [];

    for(let i = 0; i < inputArray.length - 1; i++){
        let diff = Math.abs(inputArray[i] - inputArray[i + 1]);
        max.push(diff);
        console.log(diff)
    }
    
    return Math.max(...max)
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]))