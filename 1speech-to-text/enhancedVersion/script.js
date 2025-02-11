let recognition;

function startConverting() {
  if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();

    // Set language from dropdown
    const selectedLanguage = document.getElementById("languageSelect").value;
    recognition.lang = selectedLanguage;

    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => console.log("Speech recognition started.");
    recognition.onresult = (event) => processSpeech(event);
    recognition.onerror = (event) => console.error("Speech recognition error: ", event.error);
    recognition.onend = () => console.log("Speech recognition ended.");

    recognition.start();
  } else {
    alert("Speech Recognition is not supported in this browser. Please use Google Chrome.");
  }
}

function stopConverting() {
  if (recognition) {
    recognition.stop();
    console.log("Speech recognition stopped.");
  }
}

function processSpeech(event) {
  let finalTranscript = "";
  let interimTranscript = "";

  for (let i = 0; i < event.results.length; i++) {
    const transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      finalTranscript += transcript + " ";
    } else {
      interimTranscript += transcript;
    }
  }

  document.getElementById("result").innerHTML =
    finalTranscript + `<span style="color: gray;">${interimTranscript}</span>`;
}

function clearResult() {
  document.getElementById("result").innerHTML = "Your speech will appear here...";
}

function downloadResult() {
  const resultText = document.getElementById("result").innerText;
  const blob = new Blob([resultText], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "speech_transcription.txt";
  link.click();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
