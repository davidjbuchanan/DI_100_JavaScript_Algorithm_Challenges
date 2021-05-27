function composeRanges(inputArray: number[]) {
    const newArray: number[] = [];
    for(let i =0; i< inputArray.length;i++){
        if(inputArray[i] != inputArray[i+1] - 1){
            newArray.push(inputArray.indexOf(i));
            console.log(newArray)
        }
    }
    for(let i =0; i< newArray.length;i++){ 
        let ind = inputArray.indexOf(newArray[i])
        console.log(ind)
    }
    // const result: number[] = [];
    // let pushed = inputArray.slice([0], [2])
    // console.log(pushed)

    console.log(inputArray[0])
    console.log(inputArray[newArray[0])

}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]))