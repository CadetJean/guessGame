
let secretNumber=Math.trunc(Math.random()*20+1);
let scoreNUmber=20;
let highScore=0;

//this function will reload the game 

document.querySelector('.again').addEventListener('click',function reloadPage(){
    location.reload();
});


//document.querySelector('.number').textContent=secretNumber;
document.querySelector('.check').addEventListener('click',function(){
    let userInput=document.querySelector('.guess').value;

function loadScore(){
    //will diplay Score
    document.querySelector('.score').textContent=scoreNUmber;
}
    //check if score is greater than 0
//check if number is valid or too small or too  high then either add one or remove one from score
  
if(!userInput){
        //no input display no number 
        document.querySelector('.message').textContent="No number";
    }
    else{
      if(scoreNUmber<1){
        document.querySelector('.message').textContent='you lose';
        document.querySelector('body').style.backgroundColor="#D22525";
    }
    //if number is correct diplay score number, INCLREASE high score
    else if(userInput==secretNumber){
        //if user Input eqaul to secret number add score to highscore
        //change screen background color to green '#6AD200'
        document.querySelector('.message').textContent='Correct number found';
        scoreNUmber=scoreNUmber+1;
        highScore=highScore+scoreNUmber;
        loadScore();
        document.querySelector('.highscore').textContent=highScore;
        document.querySelector('body').style.backgroundColor='#6AD200';
document.querySelector('.number').textContent=secretNumber;
       


    }else if(userInput<secretNumber){
        //if userInput is smaller than userInput display too small and decrease score by one
        document.querySelector('.message').textContent='Too small';
        scoreNUmber=scoreNUmber-1;
        loadScore();
    }else if(userInput>secretNumber){
        document.querySelector('.message').textContent='Too high';
        scoreNUmber=scoreNUmber-1;
        loadScore();
    }  
    }
    


});
    
function pageReload(){
     setTimeout();
    location.reload();
}