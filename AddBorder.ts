function addBorder(a){
    let topBorderLength = a[0].length + 2
    console.log(topBorderLength)

    let topBorder = `${"*".repeat(topBorderLength)}`
    console.log(topBorder)

    a.unshift(topBorder)
    a.push(topBorder)

    for(let i = 1; i < a.length -1; i++) {
        a[i] = `*${a[i]}*`;
        console.log(a[i]);
    }

    return a;
}

let pic = ["abc", "ded"]
console.log(addBorder(pic))

// Dylan's solution

function addBorder1(picture: string[]): any {
    const lengthofWall = picture[0].length + 2;
    console.log(lengthofWall)

    let wall = ''
    for(let i = 0; i < lengthofWall; i++) {
        wall = wall.concat("*");
        console.log(wall);
    }
    picture.unshift(wall)
    picture.push(wall)
    for(let i = 1; i < picture.length -1; i++) {
        picture[i] = '*'.concat(picture[i].concat('*'));
        console.log(picture[i]);
    }

    return picture
}

let pic1 = ["abc", "ded"]
console.log(addBorder1(pic1))