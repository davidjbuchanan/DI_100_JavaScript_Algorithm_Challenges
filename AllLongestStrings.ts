function allLongestStrings(inputArray: string[]): any[] {
    let longestWords: string [] = [];
    let length: number [] = [];
    for (let i = 0; i<inputArray.length; i++){
        length.push(inputArray[i].length);
    }
    console.log(length)

    let max = length.reduce((a, b) => Math.max(a, b)); //or
    max = Math.max(...length)
    console.log(max)

    for (let i = 0; i<inputArray.length; i++){
        if(inputArray[i].length === max){
            longestWords.push(inputArray[i]);
        }

    }
    return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))

//Dylan's solution
function allLongestStrings1(inputArray: string[]): any[] {
    let longestLength = 0;
    const longestWords = [];

    inputArray.forEach((word: string) => {
        longestLength = longestLength < word.length ? word.length : longestLength
    });

    inputArray.forEach((word: string) => {
        if (word.length === longestLength){
            longestWords.push(word);
        }
    });
    return longestWords       
}
console.log(allLongestStrings1(["aba", "aa", "ad", "vcd", "aba"]))
