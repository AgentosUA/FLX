function userCard(index) {
    let
        currentCard = index,
        cardLogs = [],
        balance = 100,
        transLimit = 100;

    function cardLogging(operation, credits, date) {
        let
            year = date.getFullYear(),
            month = date.getMonth(),
            day = date.getDay(),
            firstSymbol = 0,
            lastSymbol = 8,
            time = date.toTimeString().substr(firstSymbol, lastSymbol);
        cardLogs.push({
            operation,
            credits,
            timeOfOperation: day + '/' + month + '/' + year + ', ' + time
        });
    }

    function getCardOptions() {
        return {
            balance,
            transLimit,
            cardLogs,
            currentCard
        }
    }

    function putCredits(credits) {
        let operation = 'Received credits';
        balance += credits;
        cardLogging(operation, credits, new Date());
    }

    function takeCredits(credits) {
        if (transLimit > credits && balance > credits) {
            let operation = 'Withdrawal of credits';
            balance -= credits;
            cardLogging(operation, credits, new Date());
        } else {
            console.log('Your transaction limit and remaining balance should ' +
                'be greater than credits you want to take');
        }
    }

    function setTransactionLimit(newTransLimit) {
        let operation = 'Transaction limit change';
        transLimit = newTransLimit;
        cardLogging(operation, transLimit, new Date());
    }

    function transferCredits(credits, card) {
        let taxes = 0.005;
        let creditsWithTaxes = credits - credits * taxes;
        if (transLimit > creditsWithTaxes && balance > creditsWithTaxes) {
            takeCredits(credits);
            card.putCredits(credits);
        } else {
            console.log('Your transaction limit and remaining balance should ' +
                'be greater than credits you want to take');
        }
    }

    let getCardOpt = getCardOptions();
    let getPutCredits = putCredits();
    let getTakeCredits = takeCredits();
    let getSetTransactionLimit = setTransactionLimit();
    let getTransferCredits = transferCredits();
    return {
        getCardOpt,
        getPutCredits,
        getTakeCredits,
        getSetTransactionLimit,
        getTransferCredits
    }
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        const maxCards = 3;
        if (this.cards.length < maxCards) {
            this.cards.push(userCard(this.cards.length + 1));
        }
    }

    getCardByKey(index) {
        return this.cards[index].getCardOptions();
    }
}
