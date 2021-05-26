function characterParity(inputSymbol: any): string{
    
    if (typeof(inputSymbol) === 'string'){
        inputSymbol = Number(inputSymbol);      
        if (isNaN(inputSymbol)){
            return "not a digit"
        }
    }
    
    if (typeof(inputSymbol) === 'number'){
        let result = inputSymbol % 2? "odd": "even";
        return result
     }

}
console.log(characterParity("4"))
console.log(characterParity(4))
console.log(characterParity(5))
console.log(characterParity("?"))

//Dylan's solution
function characterParity1(symbol: string): string{
    const result = parseInt(symbol);
    return isNaN(result) ? 'not a digit': result == 0 ? "even" : "odd"
}
console.log(characterParity1("4"))
console.log(characterParity(4))
console.log(characterParity1("5"))
console.log(characterParity1("?"))
