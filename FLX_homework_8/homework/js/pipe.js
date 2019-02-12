function addOne(x) {
    return x + 1;
}

function pipe(number, ...restArgs) {
    var result = number;
    for (let i = 0; i < restArgs.length; i++) {
        result = restArgs[i](result);
    }
    return result;
}
pipe(7, addOne, addOne);