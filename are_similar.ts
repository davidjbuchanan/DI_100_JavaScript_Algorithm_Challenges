function areSimilar(inputArray1: number[], inputArray2: number[]): boolean {
    if (inputArray1.length !== inputArray2.length){
        return false
    }
    
    let count = 0;
    for (let i = 0; i < inputArray1.length; i++){
        if (inputArray1[i] !== inputArray2[i]) {
            count++
        }
    }
    return count <3
}

//console.log(areSimilar([1, 2, 3, 4], [2, 1, 3, 4]));
//console.log(areSimilar([1, 2, 3], [3, 1, 2]));
//console.log(areSimilar([1, 2, 2], [2, 1, 1]));
//console.log(areSimilar([1, 2, 1], [2, 1, 1]));
console.log(areSimilar([1, 2, 2], [2, 2, 1]));
console.log(areSimilar([1, 2, 2], [2, 4, 2]));

function areSimilar1(a: number[], b: number[]): boolean {
    if (a.toString() === b.toString()) {
        return true;
    }
    const c: number[] = [];
    let d : number[] = [];

    for( let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]){
            c.push(a[i]);
            d.push(b[i]);
        }
    }
    d = d.reverse();

    if (c.toString() === d.toString()){
        return true;
    }
    return false
}
console.log(areSimilar1([1, 2, 3, 4], [2, 1, 3, 4]));
console.log(areSimilar1([1, 2, 3], [3, 1, 2]));
console.log(areSimilar1([1, 2, 2], [2, 1, 1]));
console.log(areSimilar1([1, 2, 1], [2, 1, 1]));
console.log(areSimilar1([1, 2, 2], [2, 2, 1]));
console.log(areSimilar1([1, 2, 2], [2, 4, 2]));