let score=JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties:0
};





function playGame(playerMove){
    const computerPicked=pickComputerMove();

    let result='';

    if(playerMove === 'rock'){
        if(computerPicked === 'rock'){
            result='tie';
        }
        else if(computerPicked === 'paper'){
            result='lost';
        }
        else {
            result='won';
        }
    }
    else if(playerMove === 'paper'){
        if(computerPicked === 'rock'){
            result='won';
        }
        else if(computerPicked === 'paper'){
            result='tie';
        }
        else {
            result='lost';
        }
    }
    else{
        if(computerPicked === 'rock'){
            result='lost';
        }
        else if(computerPicked === 'paper'){
            result='won';
        }
        else {
            result='tie';
        }
    }
}

function pickComputerMove() {
    const randNum=Math.random()*100;
    
    let computerMove='';
    if(randNum>=0 && randNum <33){
        computerMove='rock';
    }
    else if(randNum >=33 && randNum < 66){
        computerMove='paper';
    }
    else if(randNum >=66 && randNum <100) {
        computerMove='scissor';
    }

    return computerMove;
}

function updateScore() {
    document.querySelector('.js-result')
}