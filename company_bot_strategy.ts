function companyBotStrategy(inputArray: number[][]): number{
    const newArray: number[][] = [];
    for(let i =0; i<inputArray.length; i++){
        if(inputArray[i][1] === 1){
            newArray.push(inputArray[i])
        }
    }
    let len = newArray.length;
    let total: number = 0;
    for(let i = 0; i < newArray.length; i++){
        total += newArray[i][0]
    }
    return total === 0 ? 0: total / len
}

console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]))
console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]))
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]))

// Dylan's solution
function companyBotStrategy1(trainingData: number[][]): number{
    let time = 0;
    let correctness = 0;

    trainingData.forEach((data: number[]) =>{
        if (data[1] === 1) {
            time += data[0];
            correctness += data[1];
        }
    });
    return time / correctness|| 0
}    
console.log(companyBotStrategy1([[4, 1], [4, -1], [0, 0], [6, 1]]))
console.log(companyBotStrategy1([[3, 1], [6, 1], [4, 1], [5, 1]]))
console.log(companyBotStrategy1([[4, -1], [0, 0], [5, -1]]))