# ✅ Gabarito do Professor: Projeto Finalizado

Esta pasta contém a resolução completa de todos os desafios propostos no exercício prático da Web Speech API. 

## 🔍 O que analisar neste código:

1. **Manipulação Dinâmica do DOM**: Observe como os dados de velocidade e tom são lidos em tempo real a partir dos inputs com `parseFloat` e exibidos na tela.
2. **Carregamento Assíncrono**: Veja como o script gerencia a lista global de vozes do sistema operacional utilizando o gatilho `onvoiceschanged` para preencher as opções do elemento `<select>`.
3. **Gerenciamento de Fila de Áudio**: O script utiliza `window.speechSynthesis.cancel()` antes de cada nova fala para evitar que múltiplas vozes fiquem sobrepostas caso o usuário clique repetidamente no botão.
4. **Estados Visuais de Feedback**: Analise o uso dos ouvintes `.onstart` e `.onend` dentro da função para adicionar e remover dinamicamente a classe `.speaking` no container principal, sincronizando a animação visual com o áudio.
