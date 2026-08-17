// Seleção dos elementos do DOM
const textInput = document.getElementById("text");
const speakButton = document.getElementById("btn-speak");

// Função principal de conversão
function falarTexto() {
  const texto = textInput.value.trim();

  // Validação simples para evitar fila vazia
  if (texto === "") {
    alert("Por favor, digite algum texto antes!");
    return;
  }

  // Cria a instância de fala
  const utterance = new SpeechSynthesisUtterance(texto);

  // Configurações básicas padrão
  utterance.lang = "pt-BR";
  utterance.rate = 1.0; // Velocidade (0.1 a 10)
  utterance.pitch = 1.0; // Tom da voz (0 a 2)

  // Executa a fala no sintetizador do navegador
  window.speechSynthesis.speak(utterance);
}

// Ouvinte de evento para o clique do botão
speakButton.addEventListener("click", falarTexto);
