function alphabeticShift(inputString: string): string {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const alphabet1 = {'0' : 'a', '1' : 'b', '2' : 'c', '3' : 'd', '4' : 'e', '5' : 'f', '6' : 'g', '7' : 'h', '8' : 'i', '9' : 'j', '10' : 'k', '11' : 'l', '12' : 'm', '13' : 'n', '14' : 'o', '15' : 'p', '16' : 'q', '17' : 'r', '18' : 's', '19' : 't', '20' : 'u', '21' : 'v', '22' : 'w', '23' : 'x', '24' : 'y', '25' : 'z'};
    let next = ''
    let nextArray = [];
    const inputArray = inputString.split('');
    inputArray.forEach(l => {
        let index = alphabet.indexOf(l)
        index =index + 1;
        let next = alphabet1[index];
        nextArray.push(next)
    })
    return nextArray.join('')
}

console.log(alphabeticShift('crazy'));

//Dylan's solution
function alphabeticShift1(inputString: string): string {
    const alphabet: object = {'a' : 'b', 'b' : 'c', 'c' : 'd', 'd' : 'e', 'e' : 'f', 'f' : 'g', 'g' : 'h', 'h' : 'i', 'i' : 'j', 'j' : 'k', 'k' : 'l', 'l' : 'm', 'm' : 'n', 'n' : 'o', 'o' : 'p', 'p' : 'q', 'q' : 'r', 'r' : 's', 's' : 't', 't' : 'u', 'u' : 'v', 'v' : 'w', 'w' : 'x', 'x' : 'y', 'y' : 'z', 'z' : 'a'};
    let inputShifted = inputString.split('');

for(let i = 0; i < inputShifted.length; i++) {
    inputShifted[i] = alphabet[inputShifted[i]]; 
    })
    return inputShifted.join('')
}

console.log(alphabeticShift1('crazy'));