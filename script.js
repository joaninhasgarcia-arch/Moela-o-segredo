
let questions = [
    {
        question: "Como você se sente em relação ao vício dessa pessoa?",
        options: ["Desespero, já tentei de tudo.", "Esperança, quero achar uma solução.", "Raiva, sinto que estou perdendo ela.", "Medo, não sei até onde isso pode ir."],
        correct: 1
    },
    {
        question: "Como você reage quando vê essa pessoa bebendo?",
        options: ["Sinto um vazio, sem saber o que fazer.", "Fico triste, vejo ela se afastando.", "Fico com raiva, ela está se destruindo.", "Tenho medo, sei que vai piorar."],
        correct: 2
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const responseContainer = document.getElementById('response-container');

    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<h2>${question.question}</h2>`;

    responseContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = function() {
            alert(index === question.correct ? 'Resposta correta!' : 'Resposta errada!');
            nextQuestion();
        };
        responseContainer.appendChild(button);
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        document.getElementById('quiz-container').innerHTML = '<h2>Você completou o quiz!</h2>';
    }
}

window.onload = displayQuestion;
