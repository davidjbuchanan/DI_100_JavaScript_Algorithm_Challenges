function commonCharacterCount(s1: string, s2: string): number {
    const mySet1 = new Set();
    const unionSet = new Set();
    for (let i = 0; i < s1.length; i++){
        mySet1.add(s1[i])
        unionSet.add(s1[i])
    }
    
    const mySet2 = new Set();
    for (let i = 0; i < s2.length; i++){
        mySet2.add(s2[i])
        unionSet.add(s2[i])
    }
    
    return mySet1.size + mySet2.size - unionSet.size
}

console.log(commonCharacterCount("aabcc", "adcaa"))
console.log(commonCharacterCount("aabcc", "adcba"))
console.log(commonCharacterCount("abcde", "abcde"))
console.log(commonCharacterCount("aabbcc", "adcba"))
console.log(commonCharacterCount("aabcc", "efggh"))

//Dylan's solution

