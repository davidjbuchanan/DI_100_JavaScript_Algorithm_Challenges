function median(arr: number[]): number {
    let min = Math.min(...arr)
    console.log(min)
    let max = Math.max(...arr)
    console.log(max)
    let med = Math.floor((min + max)/2)
    console.log(med)
    arr.forEach(num => {
        if (num === med){
            console.log(num)
            //return num
        }
    })
}

median([2, 4, 7])
median([2, 4, 7, 6])
median([1, 10, 6, 5])

// Dylan's method
function absoluteValuesSumMinimisation(a: number []): number {
    const isEven = a.length % 2 === 0;

}

console.log(absoluteValuesSumMinimisation([2, 4, 7]));
console.log(absoluteValuesSumMinimisation([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimisation([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimisation([2, 4, 7, 6, 6, 8]));
