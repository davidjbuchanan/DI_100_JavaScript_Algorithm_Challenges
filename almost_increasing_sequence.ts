function almostIncreasingSequence(inputArray: number[]): boolean{
    let total = 0;
    for (let i = 0; i<inputArray.length; i++){
        if (inputArray[i] >= inputArray[i + 1]){
            total += 1
        }
        if (inputArray[i] >= inputArray[i + 2]){
            total += 1
        }
    }
    return (total <= 1)
}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2]))
console.log(almostIncreasingSequence([1, 2, 3, 2, 2]))
console.log(almostIncreasingSequence([1, 3, 2, 3]))
console.log(almostIncreasingSequence([1, 3, 2, 4, 3]))
console.log(almostIncreasingSequence([1, 3, 2, 4, 9]))

//Dylan's solution

function almostIncreasingSequence1(sequence: number[]): boolean {
    let count = 0;
    for (let i = 0; i<sequence.length; i++){
        if (sequence[i] <= sequence[i - 1]){
            count++;
            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]){
                return false;
            }
        }
    }
    return true
}

console.log(almostIncreasingSequence1([1, 3, 2, 1]))//!!!!!!!!!!!!!!!!!!!!
console.log(almostIncreasingSequence1([1, 3, 2]))
console.log(almostIncreasingSequence1([1, 2, 3, 2, 2]))
console.log(almostIncreasingSequence1([1, 3, 2, 3]))//!!!!!!!!!!!!!!!!!!!!
console.log(almostIncreasingSequence1([1, 3, 2, 4, 3]))//!!!!!!!!!!!!!!!!!!!!
console.log(almostIncreasingSequence1([1, 3, 2, 4, 9]))
