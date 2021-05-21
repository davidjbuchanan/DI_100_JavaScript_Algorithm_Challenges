function arrayChange(inputArray: number[]): number{
    let count = 0;
    
    //to account for first number being too low e.g. [0,3,4]
    if(inputArray[1] - inputArray[0] > 1) {
       const diff = inputArray[1] - inputArray[0];
       count += diff -1
    }
    
    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i] >= inputArray[i + 1]){
            const difference = (inputArray[i] + 1) - inputArray[i + 1];
            inputArray[i + 1] = inputArray[i] + 1;
            count += difference
        }
    }
    return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1, 2, 1]))
console.log(arrayChange([8, 10, 0]))
console.log(arrayChange([0, 3, 4]))