function confirmEnding(inputString: string, ender: string): boolean {  
    return inputString.endsWith(ender)
}
console.log(confirmEnding("abstraction", "action"))
console.log(confirmEnding("open sesame", "pen"))

function confirmEnding1(inputString: string, ender: string): boolean {    
    let end = inputString.substring(inputString.length - ender.length, inputString.length)   
    return end === ender
}
console.log(confirmEnding1("abstraction", "action"))
console.log(confirmEnding1("open sesame", "pen"))

//Dylan's solution

function confirmEnding2(str: string, target: string): boolean {    
    const start = str.length - target.length;   
    return str.substring(start) === target
}
console.log(confirmEnding2("abstraction", "action"))
console.log(confirmEnding2("open sesame", "pen"))