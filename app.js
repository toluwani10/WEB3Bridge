const guess=document.querySelector('.game');
const guessNumber=document.getElementById('text');
const button=document.querySelector('.press-2');
const red = document.querySelector('.red');



 let randomNumber= Math.floor(1+ Math.random()*100);
 console.log (randomNumber);
 const MaxTries= 5;
 let count = 0;
 let gameOver = false;


function checkGuess() {
    const userGuess = parseInt(guessNumber.value);
    console.log(userGuess)
    console.log(typeof userGuess)
    let message = ("");
    
        if(userGuess === randomNumber){
        message= "Correct!!"
        red.classList.remove('red');
        button.classList.add('press-3')
    }
    else if(userGuess < randomNumber){
        message = "Low"
        red.classList.remove('red');
    }
    else if (userGuess > 100){
        message = "Enter number between 1 and 100"
    }
   else if (userGuess > randomNumber) {
        message = "Too High"
        red.classList.remove('red');
    }
    else{
        message = "Invalid"
       
    }
    count ++;
    if(count === MaxTries && gameOver === false){
        button.classList.add('press-3')
        message = "Sorry, out of tries. The number was" + randomNumber;
        red.classList.add('red');
    }
   
    document.querySelector('.msg').textContent= message
} 

button.addEventListener('click',checkGuess);








