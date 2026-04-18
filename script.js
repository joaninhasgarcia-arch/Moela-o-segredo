let currentQuestion = 0;
const questions = [
  {
    title: "Como você se sente em relação ao vício dessa pessoa?",
    answers: [
      "Desespero, já tentei de tudo.",
      "Esperança, quero achar uma solução.",
      "Raiva, sinto que estou perdendo ela.",
      "Medo, não sei até onde isso pode ir."
    ]
  },
  {
    title: "Você já tentou conversar sobre o vício com essa pessoa?",
    answers: [
      "A pessoa evitou a conversa.",
      "A pessoa admitiu, mas não quer mudar.",
      "A pessoa ficou agressiva.",
      "Já tentamos de tudo, mas não conseguimos mais nada."
    ]
  },
  {
    title: "Quais efeitos o vício está causando na vida dessa pessoa?",
    answers: [
      "Afeta o relacionamento familiar.",
      "Prejudica o trabalho/estudos.",
      "Causa problemas de saúde.",
      "Já passou por internações graves.",
      "Outros (Especifique)"
    ]
  }
];

function displayQuestion() {
  const question = questions[currentQuestion];
  document.getElementById("question-title").textContent = question.title;
  const answerButtons = document.getElementById("answer-options");
  answerButtons.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-button");
    button.onclick = nextQuestion;
    answerButtons.appendChild(button);
  });
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
    updateProgressBar();
  } else {
    document.getElementById("question-title").textContent = "Obrigado por responder!";
    document.getElementById("answer-options").style.display = "none";
    document.getElementById("next-button").style.display = "none";
  }
}

function updateProgressBar() {
  const progress = (currentQuestion / questions.length) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
}

displayQuestion();
