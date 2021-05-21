function alphabetSubsequence(s: string): boolean {
    const chars: string[] = s.split('');
    //console.log(chars);
    const charValues: number[] = [];

    chars.forEach((char: string) => {
        charValues.push(char.charCodeAt(0));
        //console.log(charValues);
    });  
    //console.log(new Set(charValues));
    //console.log(new Set(charValues).size);
  
    if(new Set(charValues).size != charValues.length){
        return false;
    };
    for(let i = 0; i <= charValues.length - 1; i++){
        if (charValues[i] > charValues[i + 1]){
            return false;
        } 
    };
    return true;
}

console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
console.log(alphabetSubsequence('zbx'))
