function bishopAndPawn(bishop: string, pawn: string): boolean{

    const grid = {
            'a': '1',
            'b': '2',
            'c': '3',
            'd': '4',
            'e': '5',
            'f': '6',
            'g': '7',
            'h': '8'
    }

    const bishXNumber = Number(grid[bishop[0]])
    const pawXNumber = Number(grid[pawn[0]])
    const bishY = Number(bishop[1]);
    const pawY = Number(pawn[1]);


    if(pawXNumber + bishXNumber === bishY + pawY) {
        return true
    } else {
        return false
    }
}

console.log(bishopAndPawn("a1", 'c3'))
console.log(bishopAndPawn('a1','b2'))
console.log(bishopAndPawn('a1','f5'))
console.log(bishopAndPawn('a1','f6'))
console.log(bishopAndPawn('a1','b3'))
console.log(bishopAndPawn('c3','d4'))





function bishopAndPawn1(bishop: string, pawn: string): boolean{
    const board = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
    }
    const bishopX = board[bishop[0]]
    const bishopY = parseInt(bishop[1])

    const pawnX = board[pawn[0]]
    const pawnY = parseInt(pawn[1])

        
    if(bishopX + pawnY === pawnX + bishopY){
        return true
    }
    return false

}

console.log(bishopAndPawn1('a1','b2'))
console.log(bishopAndPawn1('a1','f5'))
console.log(bishopAndPawn1('a1','f6'))
console.log(bishopAndPawn1('a1','b3'))
console.log(bishopAndPawn1('c3','d4'))


