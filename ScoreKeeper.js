var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset")
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    resetGame ();

});


p1Button.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
        p1Display.classList.add("winner");
        gameOver = true;
    }
    p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
   if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
        p2Display.classList.add("winner");
        gameOver = true;
    }
    p2Display.textContent = p2Score;
   }
});

resetButton.addEventListener("click", function(){
    resetGame();
});
function resetGame() {
//reset p1Score to normal, removing winner class if applicable
    p1Display.textContent = 0;
    p1Score = 0;
    p1Display.classList.remove("winner");
    //reset p2Score to normal, removing winner class
    p2Display.textContent = 0;
    p2Score = 0;
    p2Display.classList.remove("winner");
    //reset gameOver to False
    gameOver = false;
}