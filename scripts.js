// Script para a funcionalidade do quiz
const quizData = [
  {
    question: "Quem você deseja ajudar a superar o vício?",
    icon: "heart",
    options: [
      { text: "Marido(a)", icon: "heart" },
      { text: "Filho(a)", icon: "baby" },
      { text: "Pai/Mãe", icon: "users" },
      { text: "Irmão/Irmã", icon: "user-plus" },
      { text: "Amigo(a)", icon: "smile" },
      { text: "Outro", icon: "help-circle" }
    ]
  },
  // Adicionar o restante das questões conforme o modelo anterior
];

let currentStep = 0;
let answers = {};

function renderQuestion() {
  const q = quizData[currentStep];
  const selected = answers[currentStep];
  const total = quizData.length;
  const pct = Math.round((currentStep / total) * 100);
  document.getElementById('stepLabel').textContent = `Etapa ${currentStep + 1} de ${total}`;
  document.getElementById('percentLabel').textContent = `${pct}%`;
  document.getElementById('progressBar').style.width = `${pct}%`;

  const navArea = document.getElementById('navArea');
  navArea.style.display = 'none';

  const area = document.getElementById('questionArea');
  // Fade out effect
  area.classList.remove('fade-in');
  area.classList.add('fade-out');
  setTimeout(() => {
    area.innerHTML = `
      <div class="fade-in">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-12 h-12 rounded-full bg-leaf flex items-center justify-center flex-shrink-0">
            <i data-lucide="${q.icon}" style="width:22px;height:22px;color:white;"></i>
          </div>
          <h2 class="text-xl md:text-2xl font-bold text-forest leading-snug">${q.question}</h2>
        </div>
        <div class="grid gap-3">
          ${q.options.map((o, i) => `
            <button onclick="selectAnswer(${i})" class="option-btn w-full flex items-center gap-4 px-5 py-4 rounded-2xl border-2 text-left font-semibold text-base md:text-lg transition-all ${selected === i ? 'bg-forest text-white border-forest' : 'bg-white text-bark border-gray-200 hover:border-leaf'}">
              <span class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${selected === i ? 'bg-white/20' : 'bg-mint'}">
                <i data-lucide="${o.icon}" style="width:18px;height:18px;${selected === i ? 'color:white;' : 'color:#2d8a4e;'}"></i>
              </span>
              <span>${o.text}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
    area.classList.remove('fade-out');
    area.classList.add('fade-in');
    document.getElementById('progressArea').style.display = '';
    lucide.createIcons();
  }, 400);
}
