const questions = [     //Question array
    {
        question:"Which is the largest animal on the planet ?",  //Question string
        answere : [              // answere array
            {text:"shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Camel",correct:false}
        ]
    },
    {
        question:"Which is the smallest continent in the world ?",
        answere : [
            {text:"Asia",correct:false},
            {text:"Africa",correct:false},
            {text:"Australia",correct:false},
            {text:"Arctic",correct:true}
        ]
    },
    {
        question:"Which is the largest desert on the planet ?",
        answere : [
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antarctica",correct:true}
        ]
    },
    {
        question:"Which is the smallest country in the world ?",
        answere : [
            {text:"Vatican-City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Shri Lanka",correct:false}
        ]
    },
];

const questionElement = document.getElementById("question");
const answereButtons = document.getElementById("answere-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + "." + currentQuestion.question;

    currentQuestion.answere.forEach(answere =>{
        const button = document.createElement("button");
        button.innerHTML = answere.text;
        button.classList.add("btn");
        answereButtons.appendChild(button);
        if(answere.correct){
            button.dataset.correct = answere.correct;
        }
        button.addEventListener("click" , selectAnswere);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answereButtons.firstChild){
        answereButtons.removeChild(answereButtons.firstChild);
    }
}

function selectAnswere(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answereButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You have scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();