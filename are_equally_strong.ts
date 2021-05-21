function are_equally_strong(yourLeft : number, yourRight : number, friendsLeft : number, friendsRight : number): boolean {
    if (yourLeft + yourRight !== friendsLeft +friendsRight){
        return false
    }
    if (yourLeft === friendsLeft && friendsRight === yourRight){
        return true
    }
    if (yourLeft === friendsRight && friendsLeft === yourRight){
        return true
    }
    else {
        return false
    }
}

console.log(are_equally_strong(15, 10, 15, 10))
console.log(are_equally_strong(10, 15, 15, 10))
console.log(are_equally_strong(15, 10, 10, 15))
console.log(are_equally_strong(15, 10, 15, 9))
console.log(are_equally_strong(11, 9, 10, 10))
console.log(are_equally_strong(15, 0, 0, 10))
console.log(are_equally_strong(15, 0, 0, 15))


//Dylan's solution

function are_equally_strong1(yourLeft : number, yourRight : number, friendsLeft : number, friendsRight : number): boolean {
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

    return (yourStrongest === friendsStrongest && yourWeakest === friendsWeakest)
}

console.log(are_equally_strong1(15, 10, 15, 10))
console.log(are_equally_strong1(10, 15, 15, 10))
console.log(are_equally_strong1(15, 10, 10, 15))
console.log(are_equally_strong1(15, 10, 15, 9))
console.log(are_equally_strong1(11, 9, 10, 10))
console.log(are_equally_strong1(15, 0, 0, 10))
console.log(are_equally_strong1(15, 0, 0, 15))