// function centuryFromYear(year: number){
//     const yearString = year.toString();
//     if (yearString[3] === "0"){
//         return Math.floor(year/100)

//     } else {
//         return Math.floor(year/100) + 1
//     }
// }

// console.log(centuryFromYear(1900))
// console.log(centuryFromYear(1905))

function centuryFromYear(year: number){
    if (year % 100 === 0){
        return Math.floor(year/100)

    } else {
        return Math.floor(year/100) + 1
    }
}

console.log(centuryFromYear(1900))
console.log(centuryFromYear(1905))