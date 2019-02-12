function reverseNumber(number) {
    number = number.toString(10)
    if(number.charAt(0) === '-') {
      return number.charAt(0) + number.slice(1).split('').reverse().join('');
    } else {
      return number.split('').reverse().join('').slice(1);
    }      
  }
reverseNumber(-281);