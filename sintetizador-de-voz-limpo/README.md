# 🛠️ Espaço do Aluno: Projeto Base

Esta é a estrutura inicial do seu exercício. Seu objetivo é evoluir esse código básico separando as funcionalidades propostas em três módulos ordenados por nível de dificuldade.

## 🎯 Desafios de Melhoria

### Módulo 1: Controles de Áudio (Fácil)
* Adicione dois campos do tipo controle deslizante (`<input type="range">`) no HTML para modificar a **Velocidade (Rate)** e o **Tom (Pitch)**.
* No `script.js`, capture os valores desses inputs dinamicamente e repasse-os ao objeto `SpeechSynthesisUtterance` antes de chamar o método `speak()`.

### Módulo 2: Seleção de Idioma e Vozes (Médio)
* Adicione um campo de seleção (`<select id="select-voices">`) no arquivo HTML.
* Utilize o método `window.speechSynthesis.getVoices()` no JavaScript para capturar todas as vozes instaladas no sistema operacional do usuário e preencher o select de forma dinâmica.
* Certifique-se de usar o evento `window.speechSynthesis.onvoiceschanged` para lidar com o carregamento assíncrona das vozes no navegador.

### Módulo 3: Feedback Visual (Avançado)
* Crie uma alteração de estilo CSS (adicionando ou alternando uma classe) na caixa principal (`.box`) enquanto o sintetizador de voz estiver reproduzindo o texto.
* *Dica:* Utilize os eventos nativos de ciclo de vida da instância de fala, como `utterance.onstart` e `utterance.onend`.
