const resultText = document.getElementById('result-text');
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
const playerScoreText = document.createElement('h3');
const computerScoreText = document.createElement('h3');
const gameContainer = document.querySelector('.game-container');

// Display scores on the page
playerScoreText.textContent = `Player Score: ${playerScore}`;
computerScoreText.textContent = `Computer Score: ${computerScore}`;
gameContainer.appendChild(playerScoreText);
gameContainer.appendChild(computerScoreText);

// Play a round of Rock, Paper, Scissors
const playRound = (playerChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    if (playerChoice === computerChoice) {
        resultText.textContent = `It's a draw! Both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    // Update the scores
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;

    // Check for a winner
    if (playerScore === 5) {
        resultText.textContent = 'Congratulations! You are the winner!';
        resetGame();
    } else if (computerScore === 5) {
        resultText.textContent = 'Game over! The computer wins.';
        resetGame();
    }
};

// Reset the game after a win
const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
};
