let score = 0;
let difficultyLevel = 1;
let currentQuestion = 1;
let correctAnswers = 0;

const questions = [
    { question: "What is 5 + 3?", answer: 8 },
    { question: "What is 12 + 9?", answer: 21 },
    { question: "What is 15 + 20?", answer: 35 },
    { question: "What is 18 + 24?", answer: 42 },
];

const updateQuestion = () => {
    if (currentQuestion >= questions.length) {
        showFinalScore();
        return;
    }

    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestion].question;
    currentQuestion++;
};

const checkAnswer = (userAnswer) => {
    const correctAnswer = questions[currentQuestion - 1].answer;

    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
        score++;
        correctAnswers++;
        updateDifficultyLevel();
        displayFeedback(true);
    } else {
        displayFeedback(false);
    }

    // Update score and question
    document.getElementById('score').textContent = `Score: ${score}`;
    updateQuestion();
};

const updateDifficultyLevel = () => {
    // AI logic: Increase difficulty every 3 correct answers
    if (correctAnswers % 3 === 0) {
        difficultyLevel++;
        document.getElementById('difficulty-level').textContent = `Difficulty: ${difficultyLevel}`;
    }
};

const displayFeedback = (isCorrect) => {
    const feedbackElement = document.getElementById('feedback');
    if (isCorrect) {
        feedbackElement.textContent = "Correct! Well done!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Oops! Try again.";
        feedbackElement.style.color = "red";
    }
};

const showFinalScore = () => {
    alert(`Game Over! Your final score is: ${score}`);
    resetGame();
};

const resetGame = () => {
    score = 0;
    correctAnswers = 0;
    currentQuestion = 1;
    difficultyLevel = 1;
    document.getElementById('score').textContent = `Score: 0`;
    document.getElementById('difficulty-level').textContent = `Difficulty: 1`;
    updateQuestion();
};

// Initialize the game
updateQuestion();
