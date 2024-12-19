let score = 0;
let currentQuestionIndex = 0;

const questions = [
    { question: "What is the color of the sky?", options: ["blue", "green", "yellow", "red"], answer: "blue" },
    { question: "What is Mahatma Gandhi also known as?", options: ["father of the nation", "freedom fighter", "king", "saint"], answer: "father of the nation" },
    { question: "Which shape has three corners?", options: ["Triangle", "Square", "Circle", "Rectangle"], answer: "Triangle" },
    { question: "What do caterpillars turn into?", options: ["Butterflies", "Bees", "Ants", "Moths"], answer: "Butterflies" },
    { question: "What is the opposite of hot?", options: ["Cold", "Warm", "Cool", "Freezing"], answer: "Cold" },
    { question: "Which bird cannot fly?", options: ["Penguin", "Sparrow", "Eagle", "Parrot"], answer: "Penguin" },
    { question: "What is 5 + 7?", options: ["12", "10", "14", "15"], answer: "12" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Earth", "Jupiter", "Venus"], answer: "Mars" },
    { question: "What gas do humans need to breathe?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], answer: "Oxygen" },
    { question: "What is the capital of India?", options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "New Delhi" },
    { question: "Which ocean is the largest?", options: ["Pacific", "Atlantic", "Indian", "Arctic"], answer: "Pacific" },
    { question: "What is the name of the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kanchenjunga", "Makalu"], answer: "Mount Everest" },
    { question: "Which animal is known as the king of the jungle?", options: ["Lion", "Tiger", "Elephant", "Bear"], answer: "Lion" },
    { question: "What is water called when it turns to ice?", options: ["Solid", "Liquid", "Gas", "Vapor"], answer: "Solid" },
    { question: "Which animal is known as the Ship of the Desert?", options: ["Camel", "Horse", "Donkey", "Zebra"], answer: "Camel" },
    { question: "If you have 3 apples and someone gives you 4 more, how many apples do you have?", options: ["7", "6", "5", "8"], answer: "7" },
    { question: "What is the first letter of the word Elephant?", options: ["E", "A", "I", "O"], answer: "E" },
    { question: "Mouse is an input or output device?", options: ["Input", "Output", "Both", "None"], answer: "Input" },
    { question: "What is the national game of India?", options: ["Hockey", "Cricket", "Football", "Kabaddi"], answer: "Hockey" }


];

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('ques').innerText = '';
    document.getElementById('opt').innerHTML = '';
    document.getElementById('restartBtn').style.display = 'none';
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        endGame();
    }
}

function displayQuestion(question) {
    document.getElementById('ques').innerText = question.question;
    const optionsElement = document.getElementById('opt');
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectAnswer(option, question.answer);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selected, correct) {
    if (selected === correct) {
        score++;
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer is: ${correct}`);
    }
    currentQuestionIndex++;
    nextQuestion();
}

function endGame() {
    document.getElementById('ques').innerText = `Quiz Over! Your score is ${score}`;
    document.getElementById('opt').innerHTML = '';
    document.getElementById('restartBtn').style.display = 'block';
}