// Your question data
let questionData = [
    { id: 1, question: " Select the Correct Word:The dog is ___ the house. (in / on)", answer: "in", type: "Open-Ended" },
    { id: 2, question: "The sky is green. (True / False)", answer: "False", type: "Open-Ended" },
    { id: 3, question: "What color is the apple?", answer: "Red", type: "Open-Ended" },
    { id: 4, question: "They are my friends. ___ like to play with me. (They / We)", answer: "They", type: "Open-Ended" },
    { id: 5, question: " Sentence Order (Arrange the Words): is / The / teacher / my / kind. ", answer: "My teacher is kind", type: "Open-Ended" },
    { id: 6, question: "opposite of Big is ___.", answer: "small", type: "Open-Ended" },
    { id: 7, question: "She ___ a teacher. (is/are)", answer: "is", type: "Open-Ended" },
    { id: 8, question: "A bird can fly. (True/False)", answer: "true", type: "Open-Ended" },
    { id: 9, question: " Fill in the blanks:  I am ___ to school. (going / go)", answer: "going", type: "Open-Ended" },
    { id: 10, question: "Opposite of Happy is____", answer: "Sad", type: "Open-Ended" },
    { id: 11, question: "We ___ playing outside. (is / are)", answer: "are", type: "Open-Ended" },
    { id: 12, question: "The bird is ___ the tree. (in / on)", answer: "on", type: "Open-Ended" },
    { id: 13, question: "Sentence ordering : runs / fast / the / dog.", answer: "the dog runs fast", type: "Open-Ended" },
    { id: 14, question: "A cat says meow. (True / False)", answer: "True", type: "Open-Ended" },
    { id: 15, question: "The sun is ___ (hot / cold).", answer: "hot", type: "Open-Ended" },
    { id: 16, question: "I drink water when I am ____.", answer: "thirsty", type: "Open-Ended" },
    { id: 17, question: "Complete the sentence.  I like to ___ ice cream. (eat,jump,read)", answer: "eat", type: "Open-Ended" },
    { id: 18, question: "Story: It is raining outside. Sarah wears her raincoat and takes an umbrella.   Question: How is the weather? (sunny,rainy,snowy)", answer: "rainy", type: "Open-Ended" },
    { id: 19, question: "Find the missing letter. C_ _ T.  [(A,B),(A,T),(O,A)] ", answer: "COAT", type: "Open-Ended" },
    { id: 20, question: "Put the words in the correct order.  is / ball / red / The ", answer: "The ball is red", type: "Open-Ended" },




    
    
    
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
