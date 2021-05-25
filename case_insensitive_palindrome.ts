function caseInsensitivePalindrome(inputString: string){
    let inputStringUper = inputString.toLowerCase();

    if (inputStringUper === inputStringUper.split('').reverse().join('') ){
        return true
    } else {
        return false
    }
}

console.log(caseInsensitivePalindrome("AaaBAa"))
console.log(caseInsensitivePalindrome("AaaBAaa"))