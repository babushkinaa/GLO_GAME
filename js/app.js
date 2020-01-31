console.log('игра');
let isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(parseFloat(number));
}

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
        let counter = 1;
        const decrementCounter = function () {
            counter = counter -1;
            return counter; 
        }
        return decrementCounter;
    }

    function start() {
        const enterGame = () => game();
    }

    const decrementCounterAnswer = counter();
 

    function checkAnsver(){


        // (userCounterAnswer === 0) ? console.log ('Игра окончена'):'';

        
        let enterNumber = prompt('Угадай число от 1 до 100');
        if (enterNumber === null) {
            console.log ('Игра окончена null');
            return;
        }
     
        console.log(enterNumber,+' '+ numberGame );

        (!isNumber(+enterNumber)) ? (alert('Нужно ввести число'), checkAnsver()):'';
        (+enterNumber === 0) ? (alert('Нужно ввести число больше нуля'), checkAnsver()):'';

        const userCounterAnswer = decrementCounterAnswer();
        if (userCounterAnswer === 0) {
            const answer = confirm('Попытки закончились, хотите сыграть еще?');
            if (answer) {
                return game();
            }
            console.log ('Игра окончена null');
            return; 
        } else if (+enterNumber === numberGame) {
            const again = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            if (again) {
                return ;
                // return game();
            }
            console.log ('Игра окончена null');
            return;
        } else if (+enterNumber < numberGame) {
            alert('Загаданное число больше, осталось попыток : '+ userCounterAnswer); 
            checkAnsver();
        } else if (+enterNumber > numberGame) {
            alert('Загаданное число меньше, осталось попыток : '+ userCounterAnswer); 
            checkAnsver();
        } 

        startGame = start();
        return startGame;

    }
    

    //  startGame = start();
    //  return startGame;

    return checkAnsver;
    

    
    
}

// game();

play = game();

play();










