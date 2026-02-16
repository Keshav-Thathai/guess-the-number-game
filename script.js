var secretNumber=6;
function checkNumber()
{
    var userGuess=document.getElementById("guess").value;
    if(userGuess==secretNumber)
    {
        document.getElementById("result").innerText="You Win";

    }
    else{
        document.getElementById("result").innerText="You lose";


    }
}
