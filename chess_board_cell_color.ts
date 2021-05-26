function chessBoardCellColor(cell1: string, cell2: string): boolean{
    const dict = {"A1":"black",
                 "A2":"white",
                 "A3":"black",
                 "A4":"white",
                 "A5":"black",
                 "A6":"white",
                 "A7":"black",
                 "A8":"white",
                 "C1":"black",
                 "C2":"white",
                 "C3":"black",
                 "C4":"white",
                 "C5":"black",
                 "C6":"white",
                 "C7":"black",
                 "C8":"white",
                 "E1":"black",
                 "E2":"white",
                 "E3":"black",
                 "E4":"white",
                 "E5":"black",
                 "E6":"white",
                 "E7":"black",
                 "E8":"white",
                 "G1":"black",
                 "G2":"white",
                 "G3":"black",
                 "G4":"white",
                 "G5":"black",
                 "G6":"white",
                 "G7":"black",
                 "G8":"white",
                 "B1":"white",
                 "B2":"black",
                 "B3":"white",
                 "B4":"black",
                 "B5":"white",
                 "B6":"black",
                 "B7":"white",
                 "B8":"black",
                 "D1":"white",
                 "D2":"black",
                 "D3":"white",
                 "D4":"black",
                 "D5":"white",
                 "D6":"black",
                 "D7":"white",
                 "D8":"black",
                 "F1":"white",
                 "F2":"black",
                 "F3":"white",
                 "F4":"black",
                 "F5":"white",
                 "F6":"black",
                 "F7":"white",
                 "F8":"black",
                 "H1":"white",
                 "H2":"black",
                 "H3":"white",
                 "H4":"black",
                 "H5":"white",
                 "H6":"black",
                 "H7":"white",
                 "H8":"black",
                 }
        
    return dict[cell1] === dict[cell2] ? true: false 
}

console.log(chessBoardCellColor("A1", "A2"))
console.log(chessBoardCellColor("A1", "A3"))
console.log(chessBoardCellColor("G1", "D5"))
console.log(chessBoardCellColor("C1", "H8"))

//Dylan's solution
function chessBoardCellColor1(cell1: string, cell2: string): boolean{
    const board = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8,
    }

    const total1 = (board[cell1[0]] + parseInt(cell1[1])) % 2;
    console.log(total1)
    const total2 = (board[cell2[0]] + Number(cell2[1])) % 2;
    console.log(total2)

    return total2 === total1
}
console.log(chessBoardCellColor1("A1", "C3"))
console.log(chessBoardCellColor1("A1", "H3"))
console.log(chessBoardCellColor1("A2", "H3"))
console.log(chessBoardCellColor1("A7", "H8"))