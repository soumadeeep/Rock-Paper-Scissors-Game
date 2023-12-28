let computerScore=0;
let userScore=0;
const User_span= document.getElementById("user-score");
const Computer_span= document.getElementById("computer-score");
const Scoreboard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
function computerchoice(){
    const computer=['r','p','s'];
    const randomnumber=Math.floor(Math.random()*3);
    let computer_chosen=computer[randomnumber];
    return computer_chosen;
    
}

function main(){
    rock_div.addEventListener('click',()=>{
        if(computerchoice()==="r"){
        draw();
        }
    
     else if(computerchoice()==="p"){
       // console.log("computer own");
        computerwin();
        
    }
    else{
//console.log("User own");
  userwin();
    }
})
paper_div.addEventListener('click',()=>{
    if(computerchoice()==="p"){
       draw();
    }
    else if(computerchoice()==="r"){
        //user own
        userwin();
    }
    else{
//computer own
  computerwin();
    }
    
})
scissors_div.addEventListener('click',()=>{
    if(computerchoice()==='s'){
     draw();
    }
    else if(computerchoice()==='p'){
        //user own
        userwin();
    }
    else{
        //computer own
        computerwin();
    }
    
})
}
function userwin(){
     userScore++;
    User_span.innerHTML=userScore;
    result_div.innerHTML="User won the game";
    
}
function computerwin(){
    computerScore++;
    Computer_span.innerHTML=computerScore;
    result_div.innerHTML="Computer won the game";
}
function draw(){
   let computer_chosen=computerchoice();
    result_div.innerHTML="This match is draw";
}
main();
