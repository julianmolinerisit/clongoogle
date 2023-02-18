const recognition = new webkitSpeechRecognition();

const microphoneButton = document.querySelector('#microphone-button');
const inputField = document.querySelector('input[type="text"]');

// Agrega un listener para el evento click del botón del micrófono
microphoneButton.addEventListener('click', () => {
  recognition.start();
});

// Agrega un listener para el evento de reconocimiento de voz finalizado
recognition.addEventListener('result', (event) => {
  const transcript = event.results[0][0].transcript;
  inputField.value = transcript;
});

