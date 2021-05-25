function candies(candy: number, children: number): number {

    let consumed = children * (Math.floor(candy / children));
    return consumed
}
console.log(candies(10, 3))