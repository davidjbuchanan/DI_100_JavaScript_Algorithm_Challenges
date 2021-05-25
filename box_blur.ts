function boxBlur(inputArray: any[]): number{
    const width = inputArray[0].length;
    console.log(width)
    let sum = 0;
    for(let i = 0; i < inputArray.length; i++){
        for(let j = 0; j < width; j++ ){
            sum += inputArray[i][j]; 
        }
    }

    return Math.floor(sum / (inputArray.length * width))
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]))
console.log(boxBlur([[4, 0, 0], [1, 2, 2], [3, 4, 3]]))//2

//Dylan's solution
function boxBlur1(image: number[][]): number[][]{
    const res = [];

    for(let y = 0; y < image.length - 2; y++){
        const line = [];

        for (let x = 0; x < image[y].length - 2; x++) {
            let sum = 0;
            let count = 0;

            for(let a = y; a < y + 3; a++) {
                for (let b = x; b < x + 3; b++) {
                    sum += image[a][b];
                    count++;
                }
            }
            line.push(Math.floor(sum/count));
        }
        res.push(line);
    }
    return res[0];
}
console.log(boxBlur1([[1, 1, 1], [1, 7, 1], [1, 1, 1]]))
console.log(boxBlur1([[4, 0, 0], [1, 2, 2], [3, 4, 3]]))//2
