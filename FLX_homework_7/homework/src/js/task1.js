var
    askLogin = prompt('Enter your login','User'),
    userPass = 'UserPass',
    adminPass = 'RootPass',
    currentTime = new Date().getHours();

    if(!askLogin) {
        alert('Canceled');
    }

    if(askLogin.length < 4) {
        alert('i don\'t know any users having name length less than 4 symbols');
    } else {
        switch(askLogin) {
            case '':
                alert('Canceled');
                break;
            case 'User':
                break;
            case 'Admin':
                break;
            default:
                alert('I don\'t know you');
                break;
        }
    }

    // Time checker
    if(currentTime >= 20) {
        currentTime = 'evening';
    } else {
        currentTime = 'day';
    }

    // Pass checker
    if (askLogin === 'User') {
        let askPass = prompt('Enter your pass');
        if(askPass === userPass) {
            alert('Good ' + currentTime + ', User!');
        } else {
            alert('Wrong password!');
        }
    } else if (askLogin === 'Admin') {
        let askPass = prompt('Enter your pass');
        if(askPass === adminPass) {
            alert('Good ' + currentTime + ', Admin!');
        } else {
            alert('Wrong password!');
        }
    }