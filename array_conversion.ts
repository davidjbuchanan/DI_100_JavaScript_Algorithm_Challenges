function arrayConversion(inputArray: number[]): number {
    const sumArray: number[] = [];
    const prodArray: number[] = [];

    for (let i = 0; i < inputArray.length - 1; i += 2) {
        let newSum = inputArray[i] + inputArray[i + 1];
        sumArray.push(newSum);
    }
    for (let i = 0; i < sumArray.length - 1; i += 2) {
        let newProd = sumArray[i] * sumArray[i + 1];
        prodArray.push(newProd);
    }  
    return prodArray[0] + prodArray[1]
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(arrayConversion1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]))


//Dylan's solution

function arrayConversion1(inputArray: number[]): number {
    let isOdd = true;
    while(inputArray.length !== 1) {
        inputArray = sumProduct(inputArray, isOdd);
        isOdd = !isOdd;
    }
    console.log(inputArray)
    return inputArray[0];
}

function sumProduct(nums: number[], isOdd: boolean): number[] {
    const sumProducts: number[] = [];

    if(isOdd){
        for (let i = 0; i < nums.length - 1; i += 2) {
            sumProducts.push(nums[i] + nums[i + 1]);
        }
        console.log(sumProducts)
    } else{
        for (let i = 0; i < nums.length - 1; i += 2) {
            sumProducts.push(nums[i] * nums[i + 1]);
            console.log(sumProducts)
        }
    }
    return sumProducts;
}
console.log(arrayConversion1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]))
