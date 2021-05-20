function add(par1: number, par2: number): number {
   return par1 + par2
} 
console.log(add(1, 2))

function add1(...par1: number[]): number {
    console.log(par1)
    let total = 0;
    par1.forEach(num => {
        total += num
    });
    return total
 } 
 console.log(add1(1, 2, 3, 4))

 //Dylan's solution was really similar