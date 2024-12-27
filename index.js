function randomNumber(min = 0, max = 1, isInteger = false) {
    const number = Math.random() * (max - min) + min;
    return isInteger ? Math.floor(number) : number;
}

module.exports = randomNumber;