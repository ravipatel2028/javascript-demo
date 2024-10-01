function btnClicked(clicked){

    const youClicked=clicked;
    const computerClicked=computerMove();

    const res=result(youClicked, computerClicked);

    let val='You clicked : '+ youClicked+", Computer Clicked : "+ computerClicked+". ";
    if(res === 'tie'){
        val += 'Its a tie.';
    }
    else{
        val += 'You ' + res;
    }
    document.querySelector('.js-winloss').innerHTML=val;
   
}

function result(youClicked, computerClicked){

    let res='';

    if(youClicked === 'rock'){
        if(computerClicked === 'rock'){
            res='tie';
        }
        else if(computerClicked === 'paper'){
            res='lost';
        }
        else {
            res='won';
        }
    }
    else if(youClicked === 'paper'){
        if(computerClicked === 'rock'){
            res='won';
        }
        else if(computerClicked === 'paper'){
            res='tie';
        }
        else {
            res='lost';
        }
    }
    else {
        if(computerClicked === 'rock'){
            res='lost';
        }
        else if(computerClicked === 'paper'){
            res='won';
        }
        else {
            res='tie';
        }
    }
    return res;
}

function computerMove(){
    const move= Math.random()*100;

    if(move >0 && move <= 33){
        return 'rock';
    }
    else if(move > 33 && move <= 66){
        return 'paper';
    }
    else if(move >66 && move <= 99){
        return 'scissor';
    }
}