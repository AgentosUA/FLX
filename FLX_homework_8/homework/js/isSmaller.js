function isBigger(numberOne, numberTwo) {
    return numberOne < numberTwo;
}

function isSmaller(numberOne, numberTwo) {
    return !isBigger(numberOne, numberTwo);
}
isSmaller(4, 3);