function checkPalindrome(inputString: string): boolean{
    return inputString === inputString.split('').reverse().join('') ? true:false
}

console.log(checkPalindrome("aabaa"))
console.log(checkPalindrome("abac"))
console.log(checkPalindrome("a"))

// Dylan's solution
function checkPalindrome1(inputString: string): boolean{
    const originalWord = inputString.toLowerCase();
    const reverseWord = originalWord.split('').reverse().join('');
    
    return inputString === reverseWord
}

console.log(checkPalindrome1("aabaa"))
console.log(checkPalindrome1("abac"))
console.log(checkPalindrome1("a"))