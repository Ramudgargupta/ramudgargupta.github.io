// =====================================
// PROFESSIONAL QUIZ APP
// Part 1
// =====================================

const questions = [

{
question:"What does HTML stand for?",
answers:[
{text:"Hyper Text Markup Language",correct:true},
{text:"Home Tool Markup Language",correct:false},
{text:"High Text Machine Language",correct:false},
{text:"Hyper Transfer Markup Language",correct:false}
]
},

{
question:"Which language is used for styling web pages?",
answers:[
{text:"CSS",correct:true},
{text:"HTML",correct:false},
{text:"Python",correct:false},
{text:"Java",correct:false}
]
},

{
question:"Which language makes a website interactive?",
answers:[
{text:"JavaScript",correct:true},
{text:"C++",correct:false},
{text:"Java",correct:false},
{text:"Python",correct:false}
]
},

{
question:"CSS stands for?",
answers:[
{text:"Cascading Style Sheets",correct:true},
{text:"Creative Style Sheets",correct:false},
{text:"Computer Style Sheets",correct:false},
{text:"Colorful Style Sheets",correct:false}
]
},

{
question:"Which company developed JavaScript?",
answers:[
{text:"Netscape",correct:true},
{text:"Google",correct:false},
{text:"Apple",correct:false},
{text:"Microsoft",correct:false}
]
},

{
question:"Which tag is used for images?",
answers:[
{text:"<img>",correct:true},
{text:"<image>",correct:false},
{text:"<src>",correct:false},
{text:"<picture>",correct:false}
]
},

{
question:"Which HTML tag creates a hyperlink?",
answers:[
{text:"<a>",correct:true},
{text:"<link>",correct:false},
{text:"<href>",correct:false},
{text:"<url>",correct:false}
]
},

{
question:"Which symbol is used for ID in CSS?",
answers:[
{text:"#",correct:true},
{text:".",correct:false},
{text:"*",correct:false},
{text:"&",correct:false}
]
},

{
question:"Which method prints in console?",
answers:[
{text:"console.log()",correct:true},
{text:"print()",correct:false},
{text:"echo()",correct:false},
{text:"document.write()",correct:false}
]
},

{
question:"HTML is a ____?",
answers:[
{text:"Markup Language",correct:true},
{text:"Programming Language",correct:false},
{text:"Database",correct:false},
{text:"Operating System",correct:false}
]
}

];

const question=document.getElementById("question");
const answerButtons=document.getElementById("answerButtons");
const nextBtn=document.getElementById("nextBtn");
const prevBtn=document.getElementById("prevBtn");
const questionNo=document.getElementById("questionNo");
const progressBar=document.getElementById("progressBar");
const resultBox=document.getElementById("resultBox");
const quizBox=document.getElementById("quizBox");
const scoreText=document.getElementById("scoreText");
const percentage=document.getElementById("percentage");
const highScore=document.getElementById("highScore");
const restartBtn=document.getElementById("restartBtn");
const timer=document.getElementById("time");

let currentQuestion=0;
let score=0;
let timeLeft=60;
let interval;

function startQuiz(){

currentQuestion=0;
score=0;
timeLeft=60;

resultBox.classList.add("hide");
quizBox.style.display="block";

startTimer();

showQuestion();

}

function startTimer(){

clearInterval(interval);

timer.innerHTML=timeLeft;

interval=setInterval(()=>{

timeLeft--;

timer.innerHTML=timeLeft;

if(timeLeft<=0){

clearInterval(interval);

showResult();

}

},1000);

}

function showQuestion(){

answerButtons.innerHTML="";

questionNo.innerHTML=currentQuestion+1;

progressBar.style.width=((currentQuestion+1)/questions.length)*100+"%";

question.innerHTML=questions[currentQuestion].question;

questions[currentQuestion].answers.forEach(answer=>{

const button=document.createElement("button");

button.classList.add("answer-btn");

button.innerHTML=answer.text;

button.onclick=()=>selectAnswer(button,answer.correct);

answerButtons.appendChild(button);

});

prevBtn.style.display=currentQuestion===0?"none":"block";

}
// =====================================
// Part 2 Starts Here
// =====================================

function selectAnswer(button, correct){

const buttons=document.querySelectorAll(".answer-btn");

buttons.forEach(btn=>btn.disabled=true);

if(correct){

button.classList.add("correct");
score++;

}else{

button.classList.add("wrong");

buttons.forEach((btn,index)=>{

if(questions[currentQuestion].answers[index].correct){

btn.classList.add("correct");

}

});

}

}

nextBtn.onclick=function(){

if(currentQuestion<questions.length-1){

currentQuestion++;

showQuestion();

}else{

showResult();

}

}

prevBtn.onclick=function(){

if(currentQuestion>0){

currentQuestion--;

showQuestion();

}

}

function showResult(){

clearInterval(interval);

quizBox.style.display="none";

resultBox.classList.remove("hide");

scoreText.innerHTML="Score : "+score+" / "+questions.length;

let percent=Math.round((score/questions.length)*100);

percentage.innerHTML="Percentage : "+percent+"%";

let high=localStorage.getItem("quizHighScore") || 0;

if(score>high){

localStorage.setItem("quizHighScore",score);

high=score;

}

highScore.innerHTML="🏆 High Score : "+high+" / "+questions.length;

}

restartBtn.onclick=function(){

location.reload();

}

startQuiz();