var choice=['rock','paper','scissors']
        
function playRound(playerSelection, computerSelection) {
if(playerSelection=="rock" && computerSelection=="paper"){
return "Paper Beats rock.You Lose!";
}
else if(playerSelection=="rock" && computerSelection=="rock"){
return "Rock and Rock is a Tie!";
}
else if(playerSelection=="rock" && computerSelection=="scissors"){
return "Rock beats scissors.You win!";
}
else if(playerSelection=="paper" && computerSelection=="rock"){
return "Paper beats rock.You Win!";
}
else if(playerSelection=="paper" && computerSelection=="paper"){
return "Paper and Paper is a Tie!";
}
else if(playerSelection=="paper" && computerSelection=="scissors"){
return "Scissors Beat Paper .You Lose!";
}
else if(playerSelection=="scissors" && computerSelection=="paper"){
return "Scissors beats paper.You Win!"
}
else if(playerSelection=="scissors" && computerSelection=="rock"){
return "Rock beats Scissors.You Lose!"
}else if(playerSelection=="scissors" && computerSelection=="scissors"){
return "Scissors and Scissors is a Tie!"
}
else{
return "Invalid Entry"
}

}
function computerPlay(){
return choice[Math.floor(Math.random()*3)]
}


function test(value){
  // alert(value)
   document.getElementById('player_choice').innerHTML=value;
   var playerSelection = value;
   var computerSelection = computerPlay();
   document.getElementById('computer_choice').innerHTML=computerSelection;
   
   result=playRound(playerSelection, computerSelection);
   document.getElementById('results').innerHTML=result;
}