function iterateList(inputArray: number[], loops: number): number[]{
    const newArray: number[] = [];
    for(let i = 0; i < 3; i++){   
        for (let i = 0; i < inputArray.length; i++) {
            newArray.push(inputArray[i])
        }
    }
    return newArray;
}

console.log(iterateList([1, 2, 3, 4, 5], 3))

function iterateList1(inputArray: number[], startLoop: number): number[]{
    const newArray: number[] = [];
       
    for (let i = startLoop; i < inputArray.length; i++) {
        //all integers < starLoop to be popped and then pushed to the end
               
        newArray.push(inputArray[i])
    }


    for ( let i = 0; i < inputArray[startLoop -1]; i++){
        newArray.push(inputArray[i])
    }
    return newArray;
}

console.log(iterateList1([1, 2, 3, 4, 5], 3))