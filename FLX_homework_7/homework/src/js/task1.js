var
    askLogin = prompt('Enter your login','User'),
    checkLenght = askLogin.length < 4;
    userPass = 'UserPass',
    adminPass = 'RootPass',
    currentTime = new Date().getHours();

    switch(askLogin) {
        case '':
            alert('Canceled');
            break;
        case null:
            alert('Canceled');
            break;
        case 'User':
            break;
        case 'Admin':
            break;
        default:
            alert('I don’t know you');
            break;
    }

    if (askLogin === 'User') {
        let askPass = prompt('Enter your pass');
        if(askPass === userPass) {
            
        } else {
            alert('Wrong password!');
        }
    } else if (askLogin === 'Admin') {
        let askPass = prompt('Enter your pass');
        if(askPass === rootPass) {

        } else {
            alert('Wrong password!');
        }
    }