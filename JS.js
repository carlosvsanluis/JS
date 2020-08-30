var difficulty = 0;
var difficultyBound = 0;
var randomNumber = -1; 
var userNumber = -1;


difficulty = window.prompt("Are you a \n1:Jedi \n2:Padawan \n3:Resistance Pilot? \nChoose 1, 2 or 3");

if(difficulty==1) { 
    difficultyBound = 1000;
        alert("You are a Jedi")
   
}else if(difficulty==2) {
    difficultyBound = 100;
    alert("You are a Padawan")

}else if(difficulty==3) {
    difficultyBound = 10;
    alert("You are a Pilot")
} 

randomNumber = Math.round(Math.random() * difficultyBound);

while(userNumber != randomNumber) {
    userNumber = window.prompt("Try to guess the parsec number of the Galactic Empire Base from 0-"+difficultyBound);
if(userNumber>randomNumber) {
    alert("Your answer is too high, Use the force. Try again");
}else if(userNumber<randomNumber) {
    alert("Your answer is too low, believe in yourself. Try again.");
}else if(randomNumber==userNumber) {
    alert("Congratulations! You are one with the force. \n Good luck on your mission. \n May the force be with you.")
}
}
