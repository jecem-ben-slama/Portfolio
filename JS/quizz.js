
//* Quiz */
const questions = [
    {
        question: "What year did World War 1 start?",
        options: ["1912", "1914", "1916", "1918"],
        correctAnswer: 1
    },
    {
        question: "Who was the first president of the United States?",
        options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
        correctAnswer: 1
    },
    {
        question: "In what year did the French Revolution begin?",
        options: ["1787", "1789", "1791", "1793"],
        correctAnswer: 1
    },
    {
        question: "Which ancient civilization built the pyramids?",
        options: ["Greek", "Roman", "Egyptian", "Babylonian"],
        correctAnswer: 2
    },
    {
        question: "Who is often considered the father of modern physics?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correctAnswer: 1
    },
    {
        question: "What was the name of the first human-made satellite launched into orbit?",
        options: ["Sputnik 1", "Explorer 1", "Vostok 1", "Apollo 11"],
        correctAnswer: 0
    },
    {
        question: "In which country did the Industrial Revolution begin?",
        options: ["France", "Germany", "United States", "Great Britain"],
        correctAnswer: 3
    },
    {
        question: "Who led the Mongol Empire?",
        options: ["Genghis Khan", "Kublai Khan", "Attila the Hun", "Alexander the Great"],
        correctAnswer: 0
    },
    {
        question: "Which historical figure is associated with the theory of evolution by natural selection?",
        options: ["Gregor Mendel", "Charles Darwin", "Marie Curie", "Albert Einstein"],
        correctAnswer: 1
    },
    {
        question: "The Great Wall of China was primarily built to defend against which nomadic group?",
        options: ["Huns", "Mongols", "Xiongnu", "Turks"],
        correctAnswer: 2
    }
];

const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

submitButton.addEventListener('click', () => {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            if (userAnswer === question.correctAnswer.toString()) {
                score++;
            }
        }
    });

    resultElement.textContent = `You scored ${score} out of ${questions.length}`;
});