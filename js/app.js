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

    let enterNumber = prompt('Угадай число от 1 до 100');

    function checkAnsver(){
        
        userAnsver(enterNumber);
    }

    checkAnsver();

    function userAnsver(enterNumber) {

        console.log(enterNumber,numberGame);
        if (enterNumber === null) {
            endGame()
        }
        (!isNumber(enterNumber)) ? enterText():
        (+enterNumber === numberGame) ? win() : 
        (+enterNumber < numberGame) ? questNumberMin():
        (+enterNumber > numberGame) ? questNumberMax(): null;

    }

    function win() {
        alert('Победа');
    }

    function endGame(params) {
        alert('Вот и поиграли число было : ' + numberGame);
    }

    function questNumber() {
        enterNumber = prompt('Угадай число от 1 до 100');
        userAnsver(enterNumber);
    }
    function enterText() {
        enterNumber = prompt('Введи число!');
        userAnsver(enterNumber);
    }

    function questNumberMin() {
        enterNumber = prompt('Загаданное число больше');
        userAnsver(enterNumber);
    }
    function questNumberMax() {
        enterNumber = prompt('Загаданное число меньше');
        userAnsver(enterNumber);
    }
    
}

// game();



