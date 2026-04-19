
const quizData = [ /* Dados do quiz (perguntas e respostas) */ ];

let currentStep = 0;
let answers = {};

function renderQuestion() {
    // Renderização das perguntas e opções
}

function selectAnswer(idx) {
    answers[currentStep] = idx;
    const area = document.getElementById('questionArea');
    const buttons = area.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        if (i === idx) {
            btn.classList.add('selected');
            btn.style.backgroundColor = '#1a5c2a';
            btn.style.color = 'white';
            btn.style.borderColor = '#1a5c2a';
        }
    });
    setTimeout(() => {
        if (currentStep < quizData.length - 1) {
            currentStep++;
            renderQuestion();
        } else {
            showResult();
        }
    }, 600);
}

function showResult() {
    // Lógica para mostrar o resultado com o link de checkout atualizado
    document.getElementById('progressArea').style.display = 'none';
    document.getElementById('navArea').style.display = 'none';
    document.getElementById('progressBar').style.width = '100%';

    const area = document.getElementById('questionArea');
    area.innerHTML = `
      <div class="fade-in flex flex-col items-center text-center py-8 relative overflow-hidden" id="resultBox">
        <div id="confettiContainer" class="absolute inset-0 pointer-events-none"></div>
        <div class="w-20 h-20 rounded-full bg-forest flex items-center justify-center mb-5">
          <i data-lucide="check-circle" style="width:40px;height:40px;color:white;"></i>
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-forest mb-3">Análise Concluída!</h2>
        <p class="text-bark text-lg mb-2 max-w-md">Com base nas suas respostas, identificamos que existe uma solução natural e comprovada que pode transformar essa situação.</p>
        <p class="text-leaf font-semibold text-base mb-8">Milhares de famílias já encontraram esse caminho.</p>
        <a href="https://pay.cakto.com.br/8e5gvxn_854426" target="_blank" rel="noopener noreferrer" class="pulse inline-flex items-center gap-3 bg-forest text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-leaf transition-colors shadow-lg shadow-forest/30">
          <i data-lucide="lock" style="width:20px;height:20px;"></i>
          Descubra o Segredo Agora
        </a>
        <p class="text-xs text-gray-400 mt-4 flex items-center gap-1"><i data-lucide="shield-check" style="width:14px;height:14px;"></i> Pagamento 100% seguro</p>
      </div>
    `;
    lucide.createIcons();
    spawnConfetti();
}

function spawnConfetti() {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    const colors = ['#1a5c2a','#2d8a4e','#a5d6a7','#f5f0e8','#66bb6a','#fff'];
    for (let i = 0; i < 40; i++) {
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        el.style.left = Math.random() * 100 + '%';
        el.style.top = -10 + 'px';
        el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        el.style.animationDelay = Math.random() * 1.5 + 's';
        el.style.transform = `rotate(${Math.random()*360}deg)`;
        container.appendChild(el);
    }
}

renderQuestion();
