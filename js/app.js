console.log('игра');
let isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(parseFloat(number));
}

game();


function game(){

    function getNumberMath() {
        let numberGame;
        const getNum = function () {
            numberGame = Math.floor(Math.random()*100)+1;
            return numberGame;
        }
        return getNum;
    }
    const numFromGame = getNumberMath();
    const numberGame = numFromGame();
 
    function counter() {
        let counter = 11;
        const decrementCounter = function () {
            counter = counter -1;
            return counter; 
        }
        return decrementCounter;
    }

    const decrementCounterAnswer = counter();

    let userCounterAnswer;

    function counterAnswer () {
        const counterAnswer = decrementCounterAnswer();
        console.log( 'осталось ответов', counterAnswer);
        userCounterAnswer = counterAnswer;
        return counterAnswer;
    }

    userCounterAnswer = counterAnswer();
    let enterNumber;
    let finish = false;
    questNumber()

    function checkAnsver(){
       userAnsver(enterNumber);
    }
    checkAnsver();
    function userAnsver(enterNumber) {
        console.log(enterNumber,numberGame);
       if (!finish) {
        (+enterNumber === numberGame) ? win() : 
        (+enterNumber < numberGame) ? questNumberMin():
        (+enterNumber > numberGame) ? questNumberMax(): null;
       }            
    }
    function counterZero(n) {
        if (n == 1) {
            let answer = confirm('Попытки закончились, хотите сыграть еще?');
            (answer) ? game() : endGame();
            
        }  
    }
    function win() {
        let answer = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"');
        console.log(answer);
        (answer) ? game() : quitGame(); 
    }
    function quitGame() {
        finish = true; 
        alert (' Спасибо за игру');
    }
    function endGame() {
        alert('Вот и поиграли число было : ' + numberGame);
        quitGame(); 
    }
    function questNumber() {
        counterZero(userCounterAnswer);
        let answer = +prompt('Угадай число от 1 до 100, осталось попыток ...'+ userCounterAnswer);
        ( !isNumber(answer) || answer === '') ? enterText(): (answer === 0) ? endGame():      
        userAnsver(answer);
    }
    function enterText() {
        alert('Введи число!');
        questNumber();
    }
    function questNumberMin() {
        counterZero(userCounterAnswer);
        userCounterAnswer = counterAnswer();
        let answer = +prompt('Загаданное число больше, осталось попыток ...' + userCounterAnswer);
        ( !isNumber(answer) ) ? enterText(): (answer === 0) ? endGame():
        userAnsver(answer);
    }
    function questNumberMax() {
        // counterZero(userCounterAnswer);
        userCounterAnswer = counterAnswer();
        counterZero(userCounterAnswer);
        let answer = +prompt('Загаданное число меньше, осталось попыток ...' + userCounterAnswer);
        ( !isNumber(answer) ) ? enterText(): (answer === 0) ? endGame():
        userAnsver(answer);
    }
    
}




