function chunkyMonkey(inputArray: any[], len: number): any[][]{
    
    let total = []
    for (let i = 0; i < inputArray.length; i += len){
        total.push(inputArray.slice(i,i+len)) 
    }
    return total
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2))
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4))
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5, 6], 2))

// Dylan's solution
function chunkyMonkey1(arr: any[], size: number): any[][]{
    const nested: any[][] = [];
    let count = 0;
    while (count < arr.length) {
        nested.push(arr.slice(count, count += size));
    }
    
    return nested
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2))
console.log(chunkyMonkey1([0, 1, 2, 3, 4, 5], 4))
console.log(chunkyMonkey1([0, 1, 2, 3, 4, 5, 6], 2))
