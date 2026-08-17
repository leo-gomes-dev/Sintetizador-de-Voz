// Seleção dos elementos do DOM
const textInput = document.getElementById("text");
const speakButton = document.getElementById("btn-speak");
const voiceSelect = document.getElementById("select-voices");
const rateInput = document.getElementById("input-rate");
const pitchInput = document.getElementById("input-pitch");
const valRate = document.getElementById("val-rate");
const valPitch = document.getElementById("val-pitch");
const appBox = document.getElementById("app-box");

// Lista global para armazenar as vozes carregadas pelo sistema
let voices = [];

// Módulo 2: Carregar vozes do sistema e preencher o select
function carregarVozes() {
  voices = window.speechSynthesis.getVoices();

  // Limpa o select
  voiceSelect.innerHTML = "";

  // Preenche com as opções disponíveis
  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;

    // Define o Português do Brasil como padrão se encontrar
    if (voice.lang === "pt-BR") {
      option.selected = true;
    }

    voiceSelect.appendChild(option);
  });
}

// O evento onvoiceschanged é disparado de forma assíncrona pelo navegador
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = carregarVozes;
  // Força uma tentativa inicial para navegadores que carregam de imediato
  carregarVozes();
}

// Módulo 1: Atualizar os valores numéricos dos rótulos em tempo real
rateInput.addEventListener(
  "input",
  () => (valRate.textContent = rateInput.value),
);
pitchInput.addEventListener(
  "input",
  () => (valPitch.textContent = pitchInput.value),
);

// Função Principal de Fala
function falarTexto() {
  // Se já estiver falando, interrompe a fala atual antes de iniciar outra
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  const texto = textInput.value.trim();

  if (texto === "") {
    alert("Por favor, digite algum texto antes!");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(texto);

  // Módulo 1: Captura dinâmica dos inputs tipo range
  utterance.rate = parseFloat(rateInput.value);
  utterance.pitch = parseFloat(pitchInput.value);

  // Módulo 2: Vincula a voz selecionada pelo usuário
  const vozSelecionadaIndex = voiceSelect.value;
  if (vozSelecionadaIndex !== "") {
    utterance.voice = voices[vozSelecionadaIndex];
  }

  // Módulo 3: Eventos para Feedback Visual na Interface
  utterance.onstart = () => {
    appBox.classList.add("speaking");
    speakButton.textContent = "Falando...";
  };

  utterance.onend = () => {
    appBox.classList.remove("speaking");
    speakButton.textContent = "Ouvir Texto";
  };

  utterance.onerror = () => {
    appBox.classList.remove("speaking");
    speakButton.textContent = "Ouvir Texto";
  };

  // Executa o áudio
  window.speechSynthesis.speak(utterance);
}

// Ouvinte do botão de ação
speakButton.addEventListener("click", falarTexto);
