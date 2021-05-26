function circleOfNumbers2(n: number, firstNumber: number): number{
    return firstNumber >= n/2? firstNumber + (n/2) - n: firstNumber + (n/2)
}

console.log(circleOfNumbers2(10, 1))
console.log(circleOfNumbers2(10, 6))
console.log(circleOfNumbers2(10, 5))
console.log(circleOfNumbers2(12, 6))
console.log(circleOfNumbers2(12, 5))
console.log(circleOfNumbers2(12, 7))

//Dylan's solution

function circleOfNumbers1(n: number, firstNumber: number): number{
    const halfWay: number = n/2;
    let numArray = []
    for (let i = 0; i <n; i++){
        numArray.push(i)
    }
    if(firstNumber < halfWay){
        return numArray[firstNumber + halfWay]
    } 
    return numArray[firstNumber - halfWay]  
}

console.log(circleOfNumbers1(10, 1))
console.log(circleOfNumbers1(10, 6))
console.log(circleOfNumbers1(10, 5))
console.log(circleOfNumbers1(12, 6))
console.log(circleOfNumbers1(12, 5))
console.log(circleOfNumbers1(12, 7))


