let secretNumber= Math.floor(Math.random()*100)+1;
let tries=0;
function checkNumber(){
    let guess=Number(document.getElementById("guess").value);
    let message=document.getElementById("message");
    let attemptDisplay=document.getElementById("attempts");
    tries++;
    let difference=Math.abs(secretNumber-guess);
    if (guess === secretNumber) {
        message.textContent = "🎉 Correct Guess!";
    }
    else if (difference <= 6) {
        message.textContent = "🔥 Too close!";
    }
    else if (guess > secretNumber) {
        message.textContent = "📈 Too high!";
    }
    else {
        message.textContent = "📉 Too low!";
    }

    attemptDisplay.textContent = "Tries: " + tries;
}

    








