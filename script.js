let roll;
let aiRoll;
let aiChoice;
let score = 0;
let aiScore = 0;

document.getElementById('rock').addEventListener("click", function () {
    rollRPS(0);
});
document.getElementById('paper').addEventListener("click", function () {
    rollRPS(1);
});
document.getElementById('scissors').addEventListener("click", function () {
    rollRPS(2);
});


function rollRPS(choice) {
    roll = choice;
    aiChoice = Math.random();
    if (aiChoice >= 0 && aiChoice <= .33) {
        aiRoll = 0;
    } else if (aiChoice > .33 && aiChoice <= .66) {
        aiRoll = 1;
    } else {
        aiRoll = 2;
    }
    playRound(roll, aiRoll);
}

function playRound(humanRoll, aiRoll) {
    if (score < 4 || aiScore < 4) {
        if (humanRoll == aiRoll) {
            document.getElementById('ptext').textContent = "You tied this round";
        } else if (humanRoll == 0 && aiRoll == 2) {
            document.getElementById('ptext').textContent = "You won this round";
            score++;
            document.getElementById('score').textContent = `${score}`;
        } else if (humanRoll == 1 && aiRoll == 0) {
            document.getElementById('ptext').textContent = "You won this round";
            score++;
            document.getElementById('score').textContent = `${score}`;
        } else if (humanRoll == 2 && aiRoll == 1) {
            document.getElementById('ptext').textContent = "You won this round";
            score++;
            document.getElementById('score').textContent = `${score}`;
        } else if (humanRoll == 2 && aiRoll == 0) {
            document.getElementById('ptext').textContent = "You lost this round";
            aiScore++;
            document.getElementById('ai-score').textContent = `${aiScore}`;
        } else if (humanRoll == 0 && aiRoll == 1) {
            document.getElementById('ptext').textContent = "You lost this round";
            aiScore++;
            document.getElementById('ai-score').textContent = `${aiScore}`;
        } else if (humanRoll == 1 && aiRoll == 2) {
            document.getElementById('ptext').textContent = "You lost this round";
            aiScore++;
            document.getElementById('ai-score').textContent = `${aiScore}`;
        }
    } else {
        if (score == 5) {
            document.getElementById('ptext').textContent = "You won the game!";
        } else if (aiScore == 5) {
            document.getElementById('ptext').textContent = "You lost the game!";
        }
        score = 0;
        aiScore = 0;
        document.getElementById('ai-score').textContent = `${aiScore}`
        document.getElementById('score').textContent = `${score}`;
    }
}