// Elements
const startBtn = document.querySelector("#start");
// const stopBtn = document.querySelector("#stop");
// const speakBtn = document.querySelector("#speak");
const body = document.querySelector("#body");
const welcome = document.getElementById("welcome");
const text = document.getElementById("text");

let activate = false;
let trigger = false;

// Speech setup
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Speech active always
recognition.continuous = true;

// Speech start code
recognition.onstart = function () {
  console.log("Voice active");
};

// Result

recognition.onresult = function (event) {
  let current = event.resultIndex;
  let transcript = event.results[current][0].transcript;
  transcript = transcript.toLowerCase();
  console.log(`Me: ${transcript}`);

  // if (transcript.includes("Start"))
  // {
  //   trigger = true;
  // }

  if (transcript.includes("start") && activate == false) {
    trigger = true;
    activate = true;
    setTimeout(() => {
      readOut("No need to introduce my self. I'm Jarvis");
      text.innerText = "";
    }, 1000);

    //recognition.start();

    setTimeout(() => {
      readOut("Initializing all systems.");
      //text.innerText = "Initializing all systems, sir.";
    }, 6000);

    setTimeout(() => {
      readOut("Starting diagnostics, please wait.");
      //text.innerText = "Starting diagnostics, please wait.";
    }, 10000);

    setTimeout(() => {
      readOut("Diagnostics complete. No anomalies detected");
      //text.innerText = "Diagnostics complete. No anomalies detected";
    }, 15000);

    setTimeout(() => {
      readOut("System check complete. All systems are online.");
      //text.innerText = "System check complete. All systems are online.";
    }, 20000);

    setTimeout(() => {
      readOut("Standing by for your command.");
      //text.innerText = "Standing by for your command.";
    }, 25000);

    setTimeout(() => {
      text.innerText = "Say Activate to finalize..";
    }, 30000);
  }
  if (transcript.includes("activate now") || transcript.includes("activate")) {
    readOut("processing start");

    setTimeout(() => {
      body.style.backgroundColor = "black";
      body.style.backgroundImage = "url(./init.gif)";
      readOut("Please wait");
    }, 500);

    setTimeout(() => {
      body.style.backgroundImage = "url(./jarvis.gif)";
      welcome.style.display = "block";
      readOut("Welcome, I am on");
      readOut(" How may I help you boss? ");
    }, 5000);

    setTimeout(() => {
      welcome.style.display = "none";
    }, 7000);
  }

  if (activate) {
    if (
      transcript.includes("hello jarvis") ||
      transcript.includes("hey jarvis")
    ) {
      text.innerHTML = "Hello, Mr. Boss. How are you?";
      readOut("Hello, Boss. How are you?");
    }

    if (transcript.includes("i am fine")) {
      text.innerHTML = "Good";
      readOut("Good");
    }

    if (
      transcript.includes("how are you") ||
      transcript.includes("and how are you jarvis")
    ) {
      text.innerHTML = "I am also fine, thank you Boss";
      readOut("I am fine, thank you Boss");
    }

    if (
      transcript.includes("open youtube") ||
      transcript.includes("hey jarvis open youtube")
    ) {
      window.open("https://www.youtube.com");
      text.innerHTML =
        "Ok boss, opening YouTube. Here you can watch any video and enjoy";
      readOut(
        "Ok boss, opening YouTube. Here you can watch any video and enjoy"
      );
    }

    if (
      transcript.includes("i am your admin what is my birth date") ||
      transcript.includes("i'm your admin what is my birth date") ||
      transcript.includes("i'm admin your what is my birthday")
    ) {
      text.innerHTML = "5th April 2006";
      readOut("5th April 2006");
    }

    if (transcript.includes("thank you")) {
      text.innerHTML = "Welcome boss";
      readOut("Welcome boss");
    }

    if (
      transcript.includes("open google") ||
      transcript.includes("hey jarvis open google")
    ) {
      window.open("https://www.google.com");
      text.innerHTML = "Opening Google boss";
      readOut("Opening Google boss");
    }

    if (
      transcript.includes("search for") ||
      transcript.includes("search about") ||
      transcript.includes("tell me") ||
      transcript.includes("tell me about") ||
      transcript.includes("show") ||
      transcript.includes("show me") ||
      transcript.includes("how") ||
      transcript.includes("when") || 
      transcript.includes("what") ||
      transcript.includes("who") ||
      transcript.includes("by whom") ||
      transcript.includes("which")
    ) {
      let input = transcript.split(" ");
      input.splice(0, 2);
      input = input.join("+");
      window.open(`https://www.google.com/search?q=${input}`);
      text.innerHTML = "Here's the result";
      readOut("Here's the result");
    }

    if (transcript.includes("play")) {
      let input = transcript.split(" ");
      input.splice(0, 1);
      input = input.join("+");
      window.open(`https://www.youtube.com/results?search_query=${input}`);
      text.innerHTML = "Here's the result";
      readOut("Here's the result");
    }

    if (
      transcript.includes("open facebook") ||
      transcript.includes("hey jarvis open facebook") ||
      transcript.includes("open fb")
    ) {
      window.open("https://www.facebook.com");
      text.innerHTML =
        "Opening Facebook boss, this is a social networking site";
      readOut("Opening Facebook boss, this is a social networking site");
    }

    if (
      transcript.includes("open whatsapp") ||
      transcript.includes("hey jarvis open whatsapp")
    ) {
      window.open("https://www.whatsapp.com");
      text.innerHTML = "Opening WhatsApp boss";
      readOut("Opening WhatsApp boss");
    }

    if (
      transcript.includes("open instagram") ||
      transcript.includes("hey jarvis open instagram") ||
      transcript.includes("hey jarvis open insta")
    ) {
      window.open("https://www.instagram.com");
      text.innerHTML = "Opening Instagram boss";
      readOut("Opening Instagram boss");
    }

    if (transcript.includes("open prompt")) {
      const userInput = window.prompt();
      document.write(userInput);
    }
  } else {
    readOut("Start me first.");
  }
};

// Speech end code
recognition.onend = function () {
  console.log("Voice inactive");
};

startBtn.addEventListener("click", () => {
  recognition.start();
});

// stopBtn.addEventListener("click", () => {
//   recognition.stop();
// });

// Jarvis speech
function readOut(message) {
  text.innerText = `Jarvis: ${message}....`;
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.voice = window.speechSynthesis.getVoices()[0];
  speech.volume = 1;
  window.speechSynthesis.speak(speech);
}

// Example
// speakBtn.addEventListener("click", () => {
//   readOut("Hi Boss, welcome to this new world");
// });

// Onload function
window.onload = function () {
  text.innerText = "Say Start...";
};
