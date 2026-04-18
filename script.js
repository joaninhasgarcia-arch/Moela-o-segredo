let currentQuestion = 1;

function nextQuestion(questionNumber) {
    // Esconde a pergunta atual
    document.getElementById(`question${currentQuestion}`).style.display = 'none';
    
    // Mostra a próxima pergunta
    document.getElementById(`question${questionNumber}`).style.display = 'block';
    
    // Atualiza a pergunta atual
    currentQuestion = questionNumber;

    // Quando chegar na última pergunta, mostra o Tostinho explicando
    if (questionNumber === 13) {
        document.getElementById('explanation').style.display = 'block';
    }
}
