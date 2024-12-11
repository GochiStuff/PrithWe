const quizData = [
    {
        question: "What is the most common greenhouse gas emitted by human activities?",
        options: ["Carbon dioxide", "Methane", "Nitrous oxide", "Ozone"],
        correct: "Carbon dioxide",
    },
    {
        question: "Which of the following is a renewable energy source?",
        options: ["Coal", "Oil", "Wind", "Natural Gas"],
        correct: "Wind",
    },
    {
        question: "What percentage of Earth is covered by forests?",
        options: ["10%", "31%", "50%", "70%"],
        correct: "31%",
    },
    {
        question: "Which of these actions helps reduce your carbon footprint?",
        options: [
            "Using public transport",
            "Eating more meat",
            "Leaving lights on",
            "Burning fossil fuels",
        ],
        correct: "Using public transport",
    },
    {
        question: "Which country is known for having the largest area of rainforest?",
        options: ["India", "Brazil", "Australia", "Canada"],
        correct: "Brazil",
    },
];

const quizContainer = document.getElementById("quiz");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

// Load question
function loadQuestion(index) {
    const questionData = quizData[index];
    quizContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        ${questionData.options
            .map(
                (option, i) =>
                    `<label>
                        <input type="radio" name="question" value="${option}">
                        ${option}
                    </label>`
            )
            .join("")}
    `;
}

// Validate answer and go to the next question
function handleNext() {
    const selectedOption = document.querySelector(
        'input[name="question"]:checked'
    );
    if (!selectedOption) {
        alert("Please select an answer before proceeding.");
        return;
    }
    const selectedAnswer = selectedOption.value;
    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

// Show result
function showResult() {
    quizContainer.style.display = "none";
    nextBtn.style.display = "none";
    resultContainer.innerHTML = `
        <p>You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong>!</p>
        <p>Great job! Keep learning to protect our planet. 🌍</p>
    `;
}

// Initialize quiz
loadQuestion(currentQuestionIndex);

// Add event listener to Next button
nextBtn.addEventListener("click", handleNext);
