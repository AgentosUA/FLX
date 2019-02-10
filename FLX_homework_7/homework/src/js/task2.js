var
    askPlay = confirm('Do you want to play a game?'),
    askNumber = Number,
    gameRandom = 0,
    userResult = 0,
    userLastResult = 0,
    userTry = 3,
    maxTry = 5,
    twice = 1,
    prizes = [10, 5, 2];

if (askPlay === true) {
    for (var i = 0; i < 3; i++) {
        gameRandom = (Math.floor(Math.random() * 5 * twice) + 1);
        // to see real answer:
        // alert(gameRandom); 
        askNumber = Number(prompt('Enter number from 0 to ' + maxTry +
            '\nAttempts left: ' + userTry + 
            '\nTotal prize: ' + userResult +
            '\nPossible prize on current attempt: ' + prizes[i]));
        userTry--;

        switch (i) {
            case 0:
                userResult = prizes[0] + userLastResult;
                break;
            case 1:
                userResult = prizes[1] + userLastResult;
                break;
            case 2:
                userResult = prizes[2] + userLastResult;
                break;
            case 3:
                break;
            default: 0;
        }
        if (askNumber === gameRandom) {
            userResult += userLastResult;
            let askContinue = confirm('Congratulation!\nYour prize is: ' + userResult + '$\nPlay again?');
            if (askContinue) {
                userTry = 3;
                userLastResult = userResult;
                prizes[0] *= 2;
                prizes[1] *= 2;
                prizes[2] *= 2;
                maxTry *= 2;
                twice = 2;
                i = -1;
            } else {
                alert('Thank you for game\nYour prize: ' + userResult);
                i = 3;
            }
        } else if(userTry === 0){
            alert('Thank you for game\nYour prize: ' + userResult);
            let askContinue = confirm('Play again?');
                if (askContinue) {
                    userTry = 3;
                    userLastResult = userResult;
                    i = 0;
                } else {
                    i = 3;
                }
        } else {
            alert('You miss, let\'t try one more!');
        }
    }
} else {
    alert('You did not become a millionaire, but can.');
}