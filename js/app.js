console.log('игра');
let isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(parseFloat(number));
}

// game();

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


    function checkAnsver(){
        
        let enterNumber = +prompt('Угадай число от 1 до 100');

        console.log(enterNumber,+' '+ numberGame );

        (!isNumber(enterNumber)) ? (alert('Нужно ввести число'), checkAnsver()):''; 
        if (enterNumber === 0) {
            console.log ('Игра окончена')
        }else if (enterNumber < numberGame) {
            alert('Загаданное число больше'); 
            checkAnsver();
        } else if (enterNumber > numberGame) {
            alert('Загаданное число меньше'); 
            checkAnsver();
        } else {
            alert('победа');
        }

       

    }

    return checkAnsver;

    
    
}

play = game();

play();
