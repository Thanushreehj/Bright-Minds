// Your question data
let questionData = [
    { id: 1, question: "What is the next number after 5?", answer: "6", type: "Open-Ended" },
    { id: 2, question: "what id 10-4?", answer: "6", type: "Open-Ended" },
    { id: 3, question: "What is 6+2", answer: "8", type: "Open-Ended" },
    { id: 4, question: "What comes after 3 o'clock", answer: "4 o'clock", type: "Open-Ended" },
    { id: 5, question: "How many hours are in a day?", answer: "24", type: "Open-Ended" },
    { id: 6, question: "You have 8 candies and you eat 4.How many are left?", answer: "4", type: "Open-Ended" },
    { id: 7, question: "There are 10 pencils in a box. If 3 are taken out, how many pencils are left?", answer: "7 pencils", type: "Open-Ended" },
    { id: 8, question: "Which is bigger: 8 or 3 ?", answer: "8", type: "Open-Ended" },
    { id: 9, question: "Complete the pattern: 1, 2, 3, ___, ___", answer: "4,5", type: "Open-Ended" },
    { id: 10, question: "Count the coins: 🪙🪙🪙🪙.", answer: "4", type: "Open-Ended" },
    { id: 11, question: "count how many apples are there:🍎🍎🍎🍎🍎", answer: "5", type: "Open-Ended" },
    { id: 12, question: "There are 8 toys🧸🧸🧸🧸🧸🧸🧸🧸.If 2 are taken out,how many toys are left?", answer: "6", type: "Open-Ended" },
    { id: 13, question: "8 is greater than 5. (True/False)", answer: "True", type: "Open-Ended" },
    { id: 14, question: "Complete the pattern:🍎🍌🍎🍌 ___ (Apple, Banana)", answer: "Apple", type: "Open-Ended" },
    { id: 15, question: "How many squares can you see? 🟧🟧🟧🟧.", answer: "4", type: "Open-Ended" },
    { id: 16, question: "How many fingers are on one hand?", answer: "5", type: "Open-Ended" },
    { id: 17, question: "What is 2 × 3?", answer: "6", type: "Open-Ended" },
    { id: 18, question: "Is the number 4 odd or even?", answer: "even", type: "Open-Ended" },
    { id: 19, question: "How many sides does a triangle have?", answer: "3", type: "Open-Ended" },
    { id: 20, question: "Fill in the Blank: 10 – ___ = 6", answer: "4", type: "Open-Ended" },




    
];

// Dynamically render questions
let questionContainer = document.getElementById('question-container');
questionData.forEach((data, index) => {
    let questionDiv = document.createElement('div');
    questionDiv.classList.add('question-block');

    // Add question label
    let questionLabel = document.createElement('label');
    questionLabel.innerText = `${index + 1}. ${data.question}`;
    questionDiv.appendChild(questionLabel);

    // Add input field for the answer
    let answerInput = document.createElement('input');
    answerInput.placeholder =`Write your ans...`
    answerInput.type = 'text';

    answerInput.name = `question-${data.id}`;
    answerInput.dataset.answer = data.answer; // Store the correct answer for scoring
    questionDiv.appendChild(answerInput);

    questionContainer.appendChild(questionDiv);
});

// Submit button logic
document.getElementById('Submit-btn').addEventListener('click', function () {
    let inputs = document.querySelectorAll('#question-container input');
    let score = 0;

    inputs.forEach(input => {
        if (input.value.trim().toLowerCase() === input.dataset.answer.toLowerCase()) {
            score++;
        }
    });

    // Show score
    document.getElementById('score').innerText = `${score}/${questionData.length}`;
    document.getElementById('thank-you-message').style.display = 'block';
    document.getElementById('score-message').style.display = 'block';
    document.getElementById('text-heading').style.display = 'block';
    document.getElementById('question-container').style.display='none';
    document.getElementById('Submit-btn').style.display='none';
    document.getElementById('text-heading-data').style.display='none';
});
