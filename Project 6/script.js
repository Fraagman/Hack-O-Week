document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const resultBox = document.getElementById('result-message');
    const submitBtn = document.getElementById('submit-btn');

    // Define correct answers
    const correctAnswers = {
        q1: 'Paris',
        q2: 'Mars',
        q3: '12',
        q4: 'Leonardo da Vinci',
        q5: 'H2O'
    };

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Disable submit button preventing double submission
        submitBtn.disabled = true;
        submitBtn.textContent = 'Quiz Submitted';
        submitBtn.style.opacity = '0.7';
        submitBtn.style.cursor = 'not-allowed';

        let score = 0;
        const totalQuestions = Object.keys(correctAnswers).length;
        const formData = new FormData(quizForm);

        // Iterate through each question
        for (let i = 1; i <= totalQuestions; i++) {
            const questionKey = `q${i}`;
            const selectedValue = formData.get(questionKey);
            const correctValue = correctAnswers[questionKey];
            const questionCard = document.querySelector(`[data-question="${i}"]`);
            const options = questionCard.querySelectorAll('input[type="radio"]');

            // Check if answer is correct
            if (selectedValue === correctValue) {
                score++;
            }

            // Apply visual feedback
            options.forEach(option => {
                const parentLabel = option.closest('.option-label');
                
                // Reset any previous classes (though redundant on single submit)
                parentLabel.classList.remove('correct-answer', 'user-selected-incorrect', 'incorrect-answer');
                
                // Disable all inputs
                option.disabled = true;

                if (option.value === correctValue) {
                    // Highlight the correct answer (Green)
                    parentLabel.classList.add('correct-answer');
                } else if (option.checked && option.value !== correctValue) {
                    // Highlight the wrong selected answer (Red)
                    parentLabel.classList.add('user-selected-incorrect');
                } else {
                    // Dim other incorrect answers
                    parentLabel.classList.add('incorrect-answer');
                }
            });
        }

        // Display Result
        resultBox.classList.remove('hidden');
        resultBox.innerHTML = `
            <div style="text-align: center;">
                <span style="font-size: 3rem; display: block; margin-bottom: 0.5rem;">${getEmoji(score, totalQuestions)}</span>
                You got <strong style="color: var(--primary-color)">${score}/${totalQuestions}</strong> correct!
                <p style="font-size: 1rem; color: var(--text-muted); margin-top: 0.5rem;">${getFeedbackMessage(score, totalQuestions)}</p>
            </div>
        `;
        
        // Scroll to result
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    function getEmoji(score, total) {
        if (score === total) return '🏆';
        if (score >= total * 0.8) return '🌟';
        if (score >= total * 0.5) return '👍';
        return '📚';
    }

    function getFeedbackMessage(score, total) {
        if (score === total) return 'Perfect score! Excellent work!';
        if (score >= total * 0.8) return 'Great job! You know your stuff.';
        if (score >= total * 0.5) return 'Good effort! Keep practicing.';
        return 'Keep studying and try again!';
    }
});
