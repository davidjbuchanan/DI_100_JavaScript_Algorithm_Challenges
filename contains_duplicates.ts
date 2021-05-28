function containsDuplicates(inputArray: any[]): boolean {
    for (let i = 0; i < inputArray.length; i++){
        let first = inputArray.indexOf(inputArray[i]);
        let second = inputArray.lastIndexOf(inputArray[i]);
        console.log(first);
        console.log(second);
        if(inputArray.indexOf(inputArray[i]) != inputArray.lastIndexOf(inputArray[i])){
            return true
        }           
    }return false
}
console.log(containsDuplicates([1, 2, 3, 1]))
console.log(containsDuplicates([1, 2, 3, 4]))
console.log(containsDuplicates([1, 2, 2, 1]))
console.log(containsDuplicates([1, 2, 2, 3]))
console.log(containsDuplicates([1, 2, 3, 3, 2, 1]))
console.log(containsDuplicates([1, 2, 3, 3]))
console.log(containsDuplicates([1, 2, 3, 4, 5, 6, 4]))
console.log(containsDuplicates(["a", "b", "c", "d"]))
console.log(containsDuplicates(["a", "b", "c", "d", "a", "b", "c", "d"]))
