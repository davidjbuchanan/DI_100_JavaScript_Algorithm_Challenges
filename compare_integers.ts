function compareIntegers(a: string, b: string): string{
    const aInt = Number(a);
    const bInt = Number(b);
    return a > b? "greater": a < b? "less": "equal"
}

console.log(compareIntegers("12", "13"))
console.log(compareIntegers("12", "12"))
console.log(compareIntegers("14", "13"))
