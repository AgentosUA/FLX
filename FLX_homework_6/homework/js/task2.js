function getDiscount() {
    var
        price = Number(prompt('Enter amount of money: ', '')),
        discount = Number(prompt('Enter discount: ', ''));
    if( isNaN(price) || isNaN(discount) || price > 9999999 || discount > 99 || price < 0 || discount < 0) {
        alert('Invalid input data!');
    } else {
        if(discount === 0) {
            alert(
                'Price without discount: ' + price +
                '\nDiscount: ' + discount + '%' +
                '\nPrice with discount: ' + price +
                '\nSaved: ' + 0
            );
        } else {
            let result = price - (price * discount / 100);
            let saved = price - result;
            alert(
                'Price without discount: ' + price +
                '\nDiscount: ' + discount + '%' +
                '\nPrice with discount: ' + result +
                '\nSaved: ' + saved
            );
        }
        
    }
}

getDiscount();