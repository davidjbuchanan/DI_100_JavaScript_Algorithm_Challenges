function arrayMaxConsecutiveSum(inputArray: number []): number{
    const maxx: any = [];
    for(let i = 0; i < inputArray.length -1; i++){
        let summ = inputArray[i] + inputArray[i +1];
        console.log(summ);
        maxx.push(summ)
    }
    console.log(maxx)
    return Math.max(...maxx)
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6]))
console.log(arrayMaxConsecutiveSum([2000, 3, 5555, 1, 6, 9, 34, 1009, 89]))