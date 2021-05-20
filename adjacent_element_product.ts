function adjacentElementProduct(inputArray: number[]): number{
    
    let max = 0;
    for (let i = 0; i < inputArray.length - 1; i++){
        let sum = inputArray[i] * inputArray[i + 1]
        if (sum > max){
            max = sum;
        }
    }
    return max
}

console.log(adjacentElementProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementProduct([8, 9, 11, -5, 5, 3]));

//Dylan's solution

function adjacentElementProduct1(inputArray: number[]): number{
    
    let largestProduct = inputArray[0] * inputArray[1];
    for (let i = 0; i < inputArray.length - 1; i++){
        const product = inputArray[i] * inputArray[i + 1]
        largestProduct = largestProduct < product ? product : largestProduct;
    }
    return largestProduct
}

console.log(adjacentElementProduct1([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementProduct1([8, 9, 11, -5, 5, 3]));