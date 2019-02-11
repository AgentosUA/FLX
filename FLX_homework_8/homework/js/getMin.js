function getMin () {
    var result = arguments[0];
    for(let i = 0; i <= arguments.length; i++) {
        if(result > arguments[i]) {
            result = arguments[i];
        }
    }
    return result;
}
getMin(9, 2, 4);