function generateRandom(min = 0, max = 100) {
    const difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;

    return rand;
}

export default generateRandom;
