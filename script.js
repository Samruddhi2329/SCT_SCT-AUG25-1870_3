const questions =[
    {
        question :"Which planet is known as the “Red Planet?",
        answers : [
           
             {text :"Venus" , correct :false },
              {text : "Mars" , correct :true },
               {text : "Jupiter" , correct :false },
                {text : "Earth" , correct :false },
        ]
    },
    {
        question :" Which is the largest ocean on Earth?",
        answers : [
           
             {text : " Atlantic Ocean" , correct :false },
              {text : "Indian Ocean" , correct :false },
               {text : "Pacific Ocean" , correct :true },
                {text : " Arctic Ocean" , correct :false },
        ]
    },
        {question :" The Great Wall of China was primarily built to protect against which group?",
        answers : [
           
             {text : " Mongols" , correct :true },
              {text : "Romans" , correct :false },
               {text : "Persians" , correct :false },
                {text : "Vikings" , correct :false },
        ]
    },

    {question :" What is the currency of Japan?",
        answers : [
           
             {text :"Yen" , correct :true },
              {text :"Yuan" , correct :false },
               {text : "Won" , correct :false },
                {text : "Ringgit" , correct :false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("naxt-btn");
           
let currenQuestionIndex = 0;
let score = 0;

function startQuiz(){
    resetState();
    currenQuestionIndex = 0 ;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currenQuestion = questions[currenQuestionIndex]; 
    let questionNo = currenQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currenQuestion.question;
 
    
    currenQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
    
}



    
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block" ;
}
function  showScore(){
    resetState();
    questionElement.innerHTML = questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currenQuestionIndex++;
    if(currenQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();}
    }

nextButton.addEventListener("click", ()=>{
    if(currenQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();

