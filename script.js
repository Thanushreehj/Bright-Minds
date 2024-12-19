let moves = 0;
let timer = 0;
let interval;
let matchedCards = 0;

const board = document.getElementById("board");
const movesElement = document.getElementById("moves");
const timerElement = document.getElementById("timer");
const winMessage = document.getElementById("win");
const startButton = document.getElementById("start-game");

const symbols = ["A", "B", "C", "D", "E", "F", "G", "H"];
let cards = [...symbols, ...symbols]; // Duplicate symbols for matching pairs

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createBoard() {
    board.innerHTML = "";
    cards = shuffle(cards);
    cards.forEach((symbol) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.symbol = symbol;
        board.appendChild(card);
    });
}

function startGame() {
    moves = 0;
    timer = 0;
    matchedCards = 0;
    movesElement.textContent = "0 moves";
    timerElement.textContent = "Time: 0 sec";
    winMessage.style.display = "none";
    createBoard();
    clearInterval(interval);
    interval = setInterval(() => {
        timer++;
        timerElement.textContent = `Time: ${timer} sec`;
    }, 1000);
}

board.addEventListener("click", (e) => {
    const clicked = e.target;
    if (clicked.classList.contains("card") && !clicked.classList.contains("matched")) {
        clicked.textContent = clicked.dataset.symbol;
        clicked.classList.add("flipped");
        const flippedCards = document.querySelectorAll(".flipped:not(.matched)");
        if (flippedCards.length === 2) {
            moves++;
            movesElement.textContent = `${moves} moves`;
            if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
                flippedCards.forEach((card) => {
                    card.classList.add("matched");
                    card.classList.remove("flipped");
                });
                matchedCards += 2;
                if (matchedCards === cards.length) {
                    clearInterval(interval);
                    winMessage.style.display = "block";
                }
            } else {
                setTimeout(() => {
                    flippedCards.forEach((card) => {
                        card.textContent = "";
                        card.classList.remove("flipped");
                    });
                }, 1000);
            }
        }
    }
});

startButton.addEventListener("click", startGame);
