const rockpap = ["rock","paper","scissors"];

function computerPlay(arr1){

 let PCchoise= Math.floor(Math.random()* arr1.length);

 let random1 = arr1[PCchoise];
 return random1;
}

let Computerselection= computerPlay(rockpap);
let playerChoice= prompt("Rock Paper or Scissors");

playerChoice.toLowerCase();
function game (playerSelection,Computerselection){

if (playerSelection==="rock" && Computerselection=== "rock" ){
    alert("Draw, both chose rock ");
}
else if (playerSelection==="paper" && Computerselection=== "paper" ){
   alert("Draw, both chose paper ");
}
else if (playerSelection==="scissors" && Computerselection=== "scissors" ){
    console.log("Draw, both chose scissors ");
}
else if (playerSelection==="paper" && Computerselection=== "rock" ){
    console.log("Win, Paper beats rock ");
}
else if (playerSelection==="paper" && Computerselection=== "rock" ){
    console.log("Win, Paper beats rock ");
}
else if (playerSelection==="paper" && Computerselection=== "scissors" ){
    console.log("Win for bot , Scissors  beats paper ");
}
else if (playerSelection==="paper" && Computerselection=== "rock" ){
    console.log("Win, Paper beats rock ");
}
else if (playerSelection==="paper" && Computerselection=== "rock" ){
    console.log("Win, Paper beats rock ");
}
else if (playerSelection==="paper" && Computerselection=== "rock" ){
    console.log("Win, Paper beats rock ");
}




}


game(playerChoice,Computerselection);

