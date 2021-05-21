function alternatingSums(a: number[]): number[] {
    let evenSum = 0;
    let oddSum = 0;

    a.forEach((element, index) => {
        if (index % 2 === 0){
            console.log(index);
            console.log(element);
            evenSum += element;
        }else{
            oddSum += element;
        }
    })
    
    return [evenSum, oddSum];
})


console.log(alternatingSums([50, 60, 60, 45, 70]))