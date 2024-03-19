let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const gencompchoice=() => {
    const options=["rock","paper","scissor"];
   const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame=() =>{
    console.log("game was draw");
    msg.innerText='game was draw.Play again!'
    msg.style.backgroundColor="#081b31";
}
const showwinner=(userwin,userChoice,compChoice) =>{
    if (userwin) {
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win");
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
            compScore++;
            compScorepara.innerText=compScore;
            console.log("you lose");
            msg.innerText=`you lose. ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="red";
    }
};

const playgame = (userChoice) =>{
    console.log("user choice=",userChoice);
    //generating comp choice
    const compChoice=gencompchoice();
    console.log("computer choice=",compChoice);

if (userChoice==compChoice){
    drawgame();
}
else{
    let userwin=true;
    if (userChoice=="rock"){
        userwin=compChoice=="paper" ? false : true;
    }
    else if (userChoice=="paper") {
        userwin=compChoice=="scissor" ? false:true;
    }
    else {
        userwin=compChoice=="rock" ? false:true;
    }
    showwinner(userwin,userChoice,compChoice)

}};



choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
    playgame(userChoice);
});

});