function addTwoDigits(int: number): number {
    const num = int.toString();
    console.log(num);
    console.log(typeof(num));
    const spliString = num.split('');
    console.log(spliString);
    return Number(spliString[0]) + Number(spliString[1])
}

console.log(addTwoDigits(29));


function addTwoDigits1(int: number): number {
    const spliString = int.toString().split('');
    return Number(spliString[0]) + Number(spliString[1])
}

console.log(addTwoDigits1(29));
console.log(addTwoDigits1(11))

//Dylan's solution 
function addTwoDigits2(n: any): number {
    const nums = n.toString().split('');
    return nums.reduce((a: string, b: string) => {
        return parseInt(a) + parseInt(b);
    });
}

console.log(addTwoDigits2(29));
console.log(addTwoDigits2(11))
