function getResult () {
    var
        a = prompt('Enter \'a\' number:', 1),
        b = prompt('Enter \'b\' number:', 0),
        c = prompt('Enter \'c\' number:', 0),
        D = (b * b) - 4 * a * c;

    if (isNaN(D) || a == 0) {
        alert('Invalid input data');
    } else if (D < 0) {
        alert('no solution');
    } else if (D > 0) {
        var x1 = (-b + Math.sqrt(D)) / 2 * a;
        var x2 = (-b - Math.sqrt(D)) / 2 * a;
        alert('x1 = ' + x1 + '\nx2 = ' + x2);
    } else {
        var x = (-1 * b) / 2 * a;
        alert('x = ' + x);
    }   
}

getResult();