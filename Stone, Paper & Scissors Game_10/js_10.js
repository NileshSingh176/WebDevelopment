let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choice = document.querySelectorAll(".choice");  // Selecting all chooice classes
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");
const drawScorePara = document.querySelector("#draw_score");



getCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
};

const drawGame =() => {
    drawScore++;
    drawScorePara.innerText = drawScore;
    msg.innerText = "Game was draw ";
    msg.style.backgroundColor = "pink";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won : ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "orange";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You loose : ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("uesr chice = ", userChoice);   //generating computer's choice
     //generating computer's choice
    const compChoice = getCompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice ===  compChoice){
        // draw
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissor,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            // rock , scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            // rock , paper
            userWin = compChoice === "rock" ?false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

// performing task on all choices
choice.forEach((choice)=> {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");  //getting id of each choice from html
        console.log("Choice was clicked ",userChoice);
        playGame(userChoice);
    });
});

