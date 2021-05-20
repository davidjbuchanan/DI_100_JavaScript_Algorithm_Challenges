function median(arr: number[]): number {
    let min = Math.min(...arr)
    console.log(min)
    let max = Math.max(...arr)
    console.log(max)
    let med = Math.floor((min + max)/2)
    console.log(med)
    arr.forEach(num => {
        if (num === med){
            return num
        }
    })
}

console.log(median([2, 4, 7]));
console.log(median([2, 4, 7, 6]));
console.log(median([2, 4, 7, 6, 6]));
console.log(median([2, 4, 7, 6, 6, 8]));


// Dylan's method
function absoluteValuesSumMinimisation(a: number []): number {
    a = a.sort()
    const isEven = a.length % 2 === 0;
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimisation([2, 4, 7]));
console.log(absoluteValuesSumMinimisation([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimisation([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimisation([2, 4, 7, 6, 6, 8]));
