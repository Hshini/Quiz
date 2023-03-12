// Dependencies
var button=document.getElementById("button");
var seconds=document.getElementById("seconds");
var gameover=document.getElementById("gameover")
var choices=document.getElementById("choices")
var choice1=document.getElementById("choice1")
var choice2=document.getElementById("choice2")
var choice3=document.getElementById("choice3")
var choice4=document.getElementById("choice4")
var question=document.getElementById('question')
var header=document.getElementById('header')
var score=document.getElementById('score');
var finalScore=document.getElementById('final-score')
var initials=document.getElementById('initials')
var submitBtn=document.querySelector('#submitBtn')
var textArea=document.querySelector('#text-area')
var score=document.querySelector('#score')
var highScores=document.querySelector('#high-scores')
var goBack=document.querySelector('#goBack')

var questionIndex=0;
var checkAnswer=true;
var secondsLeft=50;


//Hide Elements 
function hideEL(){
    finalScore.classList.add('hiden');
    initials.classList.add('hiden');
    submitBtn.classList.add('hiden')
    textArea.classList.add('hiden')
    highScores.classList.add('hiden')
    goBack.classList.add('hiden')
}
hideEL();
//ARRAY WITH QUESTIONS
var questionArray=[ {
    question:'Which of the following statements regarding JavaScript is true?',
    choice1:'JavaScript is Assembly-language',
    choice2:'JavaScript is an Object-Based language',
    choice3:'JavaScript is a High-level language',
    choice4:'JavaScript is an Object-Oriented language',
    checkAnswer:"JavaScript is an Object-Based language"
},
{
    question:'JavaScript was created by which company?',
    choice1:'Ibm',
    choice2:'Sun Microsystems',
    choice3:'Netscape',
    choice4:'Bell Labs',
    checkAnswer:"Netscape"

},
{
    question:'Which of the below do not belong in the JavaScript Data Types category?',
    choice1:'Number',
    choice2:'Undefined',
    choice3:'Float',
    choice4:'Boolean',
    checkAnswer:'Float'
},
{
    question:'Which of these String object functions gives the calling data type transformed to upper case?',
    choice1:'toString()',
    choice2:'substring()',
    choice3:'toUpperCase()',
    choice4:'toLocaleUpperCase()',
    checkAnswer: 'toUpperCase()'
}
]
//Start Game Function
function startGame(){
  
   button.classList.add("hiden");
   header.classList.add('hiden');
   game()
   displayQuestions();
}
//Countdown Timer
var interval;
function game(){
         interval=setInterval(function(){
        secondsLeft--
        seconds.textContent=secondsLeft +" "+ "Seconds Left";
        if(secondsLeft===0){
            elements()
            gameover.textContent="Game Over"; 
            clearInterval(interval);
           
        }
       },1000)
}
//Display Questions
function displayQuestions(){
    question.textContent=questionArray[questionIndex].question
    choice1.textContent=questionArray[questionIndex].choice1
    choice2.textContent=questionArray[questionIndex].choice2
    choice3.textContent=questionArray[questionIndex].choice3
    choice4.textContent=questionArray[questionIndex].choice4
}
//Function for checking correct answer
function nextQuestion(event){
    var buttontext=event.target.textContent;
    console.log(buttontext)
    
    if(buttontext !==questionArray[questionIndex].checkAnswer){
        secondsLeft -=10;
    }
    
   if(questionIndex<=questionArray.length){
        displayQuestions()
    }
    
    else{
        clearInterval(interval);
        score.textContent= " "+ secondsLeft;
       
        elements();        
    }
    questionIndex++; 
       


}
function elements(){
    question.classList.add('hiden');
    choice1.classList.add('hiden');
    choice2.classList.add('hiden');
    choice3.classList.add('hiden');
    choice4.classList.add('hiden');
    finalScore.classList.remove('hiden');
    initials.classList.remove('hiden');
    submitBtn.classList.remove('hiden');
    textArea.classList.remove('hiden')
}
function message(){
    var msg=document.createElement('h3');
    var lastscore=document.createElement('p');
    msg.textContent="Hight Scores"
    lastscore.textContent=secondsLeft;
    document.body.appendChild(msg)
}

button.addEventListener('click',startGame);
choice1.addEventListener('click',nextQuestion)
choice2.addEventListener('click',nextQuestion)
choice3.addEventListener('click',nextQuestion)
choice4.addEventListener('click',nextQuestion)
submitBtn.addEventListener('click',function(event){
    event.preventDefault();
    hideEL()
    highScores.classList.remove('hiden')
    goBack.classList.remove('hiden')
    highScores.textContent='High Scores =' + secondsLeft;
})
 goBack.addEventListener('click',function(){
    
    location.reload()
 })