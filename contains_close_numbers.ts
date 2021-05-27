function containsCloseNumbers(inputArray: number[], difference: number){
    const doublers: number[] = [];
    for(let i = 0; i < inputArray.length; i++){
        for(let j = 0; j < inputArray.length; j++){
            if(inputArray[i] === inputArray[j] && i!=j){
                if(Math.abs(j-i) <= difference){
                    return true
                } else {
                    return false
                }
            }
        }   
    } return false
}
console.log(containsCloseNumbers([0, 1, 2, 3, 5, 2], 3))
console.log(containsCloseNumbers([0, 1, 2, 3, 5, 2], 2))
console.log(containsCloseNumbers([0, 1, 2, 3, 5, 2, 1], 8))
console.log(containsCloseNumbers([0, 1, 3, 5, 2], 2))
