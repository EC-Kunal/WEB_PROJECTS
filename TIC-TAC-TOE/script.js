let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".btn");
let newGame = document.querySelector("#btn1");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("Clicked");
        if(turnO){
            box.innerText = "O"; 
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const resetGame = () => {
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
}

const enableBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = "Congratulations, Winner is " + winner;
     msgContainer.classList.remove("hide");
     disableBox();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                console.log("Winner is " + val1);
                showWinner(val1);
            }
        }
    }
}

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
