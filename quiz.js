document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get the answers
    const answers = {
        q1: document.getElementById('q1').value,
        q2: document.getElementById('q2').value,
        q3: document.getElementById('q3').value
    };

    // Correct answers
    const correctAnswers = {
        q1: 'b', // AI is a machine that mimics human behavior
        q2: 'a', // Automated grading systems
        q3: 'b'  // Adjusting the pace of learning
    };

    // Calculate score
    let score = 0;
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++;
        }
    }

    // Provide feedback
    let feedback = '';
    if (score === 3) {
        feedback = 'Excellent! You have a solid understanding of AI in education.';
    } else if (score === 2) {
        feedback = 'Good job! You are on the right track, but review some topics.';
    } else {
        feedback = 'Don’t worry! Review the video again and try the quiz later.';
    }

    // Show feedback
    document.getElementById('quiz-feedback').textContent = `Your score: ${score}/3. ${feedback}`;
});
