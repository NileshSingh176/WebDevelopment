//Accessing the elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#newGm-btn");
let msgContainer = document.querySelector(".mess-container");
let msg = document.querySelector("#msg");




let turn0 = true;  //playerX, player0
let count = 0 //To Track Draw


const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn0 = true;
    count = 0;
    enableleBoxes();
    msgContainer.classList.add("Hide");
}



boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was clicked");
        if (turn0 == true){
            //player0
            box.innerText = "0";
            box.style.color = "blue";
            turn0 = false;
        }
        else{
            //playerX
            box.innerText = "X";
            box.style.color = "red";
            turn0 = true;
        }
        box.disabled = true;  // to disable the box after click.
        count++;
        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
           gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableleBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("Hide");   // removing the hide class
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("WINNER",pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);