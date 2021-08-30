 function guess()
 {
 // random value generated
 var y = Math.floor(Math.random() * 10 + 1);
// number guessed by user     
var x = document.getElementById("guessField").value;

if(x == y)
{    
    alert("CONGRATULATIONS!!! YOUR GUESSED NUMBER IS RIGHT");
}
else if(x > y) 
{    
    alert("THE GUESS NUMBER IS GREATER");
}
else
{
    alert("THE GUESS NUMBER IS SMALLER")
}
}