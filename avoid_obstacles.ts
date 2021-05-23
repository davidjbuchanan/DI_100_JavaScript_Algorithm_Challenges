function avoidObstacles(inputArray: number[]): number{
    const safeInts: number[] = [];
    const max: number = Math.max(...inputArray) + 2;
    console.log(max)
    for(let i = 0; i < max; i++){
        if(!inputArray.includes(i)){
            safeInts.push(i);
            console.log(safeInts);
        }
    }
    const cd: number[] = [];
    for(let i = 1; i < safeInts.length; i++){
        for(let j = 1; j < safeInts.length;  j++){
            if( j%i ===0)
            cd.push(safeInts[i])
            console.log(cd);
            
        }
    }
}

console.log(avoidObstacles([5,3,6,2,7,9]))

//Dylan's solution
function avoidObstacles1(inputArray: number[]): number{
    inputArray = inputArray.sort((a, b) => a-b);
    console.log(inputArray);
    const largestArrayVal = inputArray[inputArray.length - 1];
    console.log(largestArrayVal);

    for (let i = 1; i <= largestArrayVal + 1; i++){
        if(inputArray.every((element) => element % i !== 0)) {
            return i;
        }

    }
}
console.log(avoidObstacles1([5,3,6,2,7,9]))


