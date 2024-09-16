const choices = document.querySelectorAll(".ch");
let msg = document.querySelector("#msg");
let u_Sc = document.querySelector("#userScore");
let c_Sc = document.querySelector("#compScore");
let btn = document.querySelector(".btn");
let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
    const options = ["Rock" , "Paper" , "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];

}
const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin === true){
        console.log("You Win!!");
        msg.innerText = "You Won!! " + userChoice + " beats " + computerChoice ;
        msg.style.backgroundColor = "Green";
        userScore++;
        u_Sc.innerText = userScore;

    }
    else{
        console.log("You Lose!!");
        msg.innerText = "You Lose!! " + computerChoice + " beats " + userChoice ;
        msg.style.backgroundColor = "Red";
        compScore++;
        c_Sc.innerText = compScore;
    }
}
const resetGame = () => {
    console.log("Rbtn was clicked!!");
    userScore = 0;
    compScore = 0;
    u_Sc.innerText = userScore;
    c_Sc.innerText = compScore;
    msg.innerText = "Start the Game!!";
    msg.style.backgroundColor = "rgb(240, 240, 140)";
    msg.style.color = "black";

}
const drawGame = () => {
    console.log("Game was draw!!");
    msg.innerText = "Game Draw!! Play Again";
    msg.style.backgroundColor = "Blue";
}
const playgame = (userChoice) => {
    console.log("User-Choice : " + userChoice);
    const computerChoice = genCompChoice();
    console.log("Comp-Choice :  " + computerChoice);
    let userWin = true;
    if(userChoice === computerChoice){
        drawGame();
    }
    else{
        if(userChoice === "Rock"){
           userWin =  computerChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = computerChoice === "Rock" ? true : false;
        }
        else{
            userWin = computerChoice === "Paper" ? true : false;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice); 
    })
})

btn.addEventListener("click",resetGame);