var p1Button =    document.getElementById('buttonp1');
var p2Button =    document.getElementById('buttonp2');
var resetButton=  document.getElementById('reset');
var numInput=     document.querySelector('input');
var winningScoreDisplay= document.querySelector("p span");
var p1Score=0;
var p2Score=0;
var gameOver=false;
var winningScore= 5;

function initial(){
    p1Score=0;
    p2Score=0;
    document.getElementById("h1Score").textContent = p1Score;
    document.getElementById("h2Score").textContent = p2Score;
    document.getElementById("h1Score").style.color= "black";
    document.getElementById("h2Score").style.color = "black";
    gameOver=false; 
    
}
resetButton.addEventListener("click", initial);

p1Button.addEventListener("click", function(){
    if(!gameOver)
    {
    p1Score++;
        if(p1Score==winningScore)
        {
            gameOver=true;
            document.getElementById("h1Score").style.color="green";
               
        }
      //   alert("Player 1 Wins!!");
    
        document.getElementById("h1Score").textContent= p1Score;
    }
})

p2Button.addEventListener("click", function(){
       if(!gameOver){
         p2Score++;
       if(p2Score==winningScore){
           gameOver=true;
         //  alert("Player 2 Wins!!");
           document.getElementById("h2Score").style.color="green";
       }
           document.getElementById("h2Score").textContent= p2Score;
           
       } 
})

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent=numInput.value;
    winningScore= Number(numInput.value);
})

