//the database of words and sentences with respective defined level. This is offline database to handle the software functions.

const words = {
  easy: [
    "cat", "dog", "hat", "sun", "moon", "ball", "book", "tree", "fish", "bird",
    "red", "blue", "green", "yellow", "black", "white", "big", "small", "hot", "cold",
    "run", "jump", "walk", "sit", "eat", "drink", "sleep", "play", "sing", "dance",
    "mom", "dad", "boy", "girl", "baby", "house", "car", "bike", "boat", "train",
    "apple", "banana", "orange", "grape", "milk", "water", "juice", "bread", "cheese", "egg",
    "shoe", "sock", "shirt", "pants", "coat", "hat", "bed", "chair", "table", "door",
    "toy", "game", "ball", "doll", "kite", "swing", "slide", "sand", "grass", "flower",
    "bee", "ant", "fly", "frog", "duck", "cow", "pig", "sheep", "horse", "chicken",
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "up", "down", "in", "out", "on", "off", "over", "under", "left", "right",
    "happy", "sad", "mad", "glad", "scared", "brave", "kind", "mean", "good", "bad",
    "fast", "slow", "loud", "quiet", "hard", "soft", "old", "new", "clean", "dirty",
    "open", "close", "push", "pull", "give", "take", "buy", "sell", "win", "lose",
    "day", "night", "morning", "evening", "week", "month", "year", "today", "tomorrow", "yesterday",
    "hello", "goodbye", "please", "thank you", "sorry", "yes", "no", "maybe", "okay","wow","apple",
    "banana","orange","mango","pear","peach","lemon","cherry","kiwi","berry","melon", "lime","plum","apricot",
    "The cat is black.","He likes dogs.","She runs fast.","We eat bread.","They play ball.",
    "The sun is hot.","It is cold today.","The bird can fly.",
    "Fish swim in water.","I see the moon.","The car is red.","She has a book.","He drinks milk.","We go to school.","The tree is big.","I love my mom.","The dog barks loud.","The girl sings well.","Boys like to jump.",
    "The baby sleeps now.","I eat an apple.","The house is white.","We sit on chairs.","They walk to the park.","The flower is pretty.","I wear new shoes.","The sky is blue.","We play in the sand.","The train goes fast."

  ],
  medium: [
    "elephant", "giraffe", "penguin", "kangaroo", "octopus", "butterfly", "alligator", "squirrel", "raccoon", "dolphin",
    "beautiful", "dangerous", "colorful", "delicious", "exciting", "friendly", "important", "interesting", "wonderful", "terrible",
    "alphabet", "calendar", "dictionary", "encyclopedia", "imagination", "knowledge", "library", "magazine", "newspaper", "vocabulary",
    "basketball", "football", "soccer", "tennis", "volleyball", "swimming", "running", "cycling", "skating", "gymnastics",
    "brother", "sister", "cousin", "uncle", "aunt", "grandmother", "grandfather", "neighbor", "friend", "teacher",
    "vegetables", "fruit", "meat", "cereal", "sandwich", "pizza", "spaghetti", "chocolate", "ice cream", "cookies",
    "bedroom", "bathroom", "kitchen", "living room", "dining room", "garage", "attic", "basement", "garden", "balcony",
    "airplane", "helicopter", "motorcycle", "submarine", "tractor", "ambulance", "police car", "fire truck", "taxi", "bus",
    "computer", "telephone", "television", "camera", "microwave", "refrigerator", "washing machine", "vacuum cleaner", "dishwasher", "air conditioner",
    "mountain", "ocean", "desert", "forest", "river", "lake", "island", "beach", "waterfall", "volcano",
    "winter", "spring", "summer", "autumn", "weather", "temperature", "humidity", "precipitation", "forecast", "climate",
    "rectangle", "triangle", "circle", "square", "cylinder", "sphere", "cube", "pyramid", "cone",
    "guitar", "piano", "violin", "trumpet", "flute", "drums", "saxophone", "clarinet", "harmonica", "accordion",
    "scientist", "engineer", "doctor", "nurse", "teacher", "lawyer", "architect", "chef", "artist", "musician",
    "adventure", "mystery", "comedy", "drama", "fantasy", "horror", "romance", "thriller", "biography","history",
   

  ],
  hard: [
    "photosynthesis", "metamorphosis", "biodiversity", "ecosystem", "chlorophyll", "mitochondria", "chromosome", "deoxyribonucleic acid", "paleontology", "archaeology",
    "psychology", "philosophy", "sociology", "anthropology", "linguistics", "economics", "political science", "jurisprudence", "theology", "epistemology",
    "trigonometry", "calculus", "algebra", "geometry", "statistics", "logarithm", "polynomial", "quadratic equation", "differential", "integral",
    "electromagnetic", "quantum mechanics", "relativity", "thermodynamics", "nanotechnology", "biotechnology", "artificial intelligence", "cybersecurity", "cryptocurrency", "blockchain",
    "cardiovascular", "respiratory", "gastrointestinal", "endocrine", "lymphatic", "musculoskeletal", "integumentary", "reproductive", "urinary", "nervous system",
    "constitution", "democracy", "autocracy", "oligarchy", "bureaucracy", "legislation", "judiciary", "executive", "parliament", "diplomacy",
    "renaissance", "enlightenment", "industrial revolution", "globalization", "imperialism", "colonialism", "nationalism", "capitalism", "socialism", "communism",
    "impressionism", "surrealism", "cubism", "expressionism", "abstract", "renaissance", "baroque", "neoclassicism", "romanticism", "modernism",
    "onomatopoeia", "alliteration", "metaphor", "simile", "personification", "hyperbole", "oxymoron", "irony", "euphemism", "synecdoche",
    "phosphorescence", "bioluminescence", "chromatography", "spectroscopy", "crystallography", "polarization", "diffraction", "refraction", "interference", "resonance",
    "entrepreneur", "philanthropy", "conglomerate", "monopoly", "oligopoly", "diversification", "outsourcing", "globalization", "inflation", "recession",
    "biodegradable", "sustainability", "renewable energy", "carbon footprint", "deforestation", "desertification", "eutrophication", "ozone depletion", "greenhouse effect", "climate change",
    "hypothetical", "theoretical", "paradoxical", "enigmatic", "ambiguous", "controversial", "unprecedented", "revolutionary", "innovative", "paradigm-shifting",
    "serendipitous", "ephemeral", "quintessential", "mellifluous", "surreptitious", "ubiquitous", "esoteric", "ethereal", "idiosyncratic", "paradoxical",
    "pneumonoultramicroscopicsilicovolcanoconiosis", "floccinaucinihilipilification", "sesquipedalian","The beautiful butterfly fluttered through the colorful garden.","My uncle is a friendly teacher at the local library.",
 ]
};

// Variables to track the current word, recognition state, current user, difficulty level, and progress
let currentWord = "";
let recognition;
let currentUser = "";
let currentLevel = "easy";
let progress = 0;

// When the DOM is fully loaded, setup modal-related functionality
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("info-modal");
  var btn = document.getElementById("info-btn");
  var span = document.getElementsByClassName("close-btn")[0];

  // Show the modal when the button is clicked
  btn.onclick = function () {
    modal.style.display = "block";
    document.querySelector(".modal-content").classList.add("show");
  };

  // Close the modal when the close button (span) is clicked
  span.onclick = function () {
    modal.style.display = "none";
  };

  // Close the modal when the user clicks outside of it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

// Handle the login form submission
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  currentUser = document.getElementById("username").value; // Get username
  document.getElementById("UserNameVal").textContent = currentUser; // Display the username
  passWord = document.getElementById("password").value; // Get password

  fetchProgress(currentUser, passWord); // Fetch progress data for the user
});

// Set up difficulty level buttons to start the game
document.querySelectorAll(".difficulty-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    currentLevel = this.getAttribute("data-level"); // Set difficulty based on button clicked
    startGame(); // Start the game
  });
});

// Set up the language select for translation
document.getElementById("language-select").addEventListener("change", function () {
  if (this.value) {
    translateSentence(currentWord); // Translate the current word or sentence when language is selected
  }
});

// Function to start the game
function startGame() {
  document.getElementById("difficulty-page").classList.add("hidden"); // Hide difficulty selection
  document.getElementById("game-page").classList.remove("hidden"); // Show game page
  generateNextWord(); // Generate a new word
}

// Function to generate the next word
function generateNextWord() {
  const messageBox = document.getElementById("message-box");
  messageBox.classList.add("hidden"); // Hide message box
  document.getElementById("message").textContent = ""; // Clear message

  document.getElementById("translation").textContent = ""; // Clear translation box
  document.getElementById("language-select").value = ""; // Reset language selection

  // Select a random word from the current difficulty level
  currentWord = words[currentLevel][Math.floor(Math.random() * words[currentLevel].length)];
  document.getElementById("word").textContent = currentWord; // Display the word

  document.getElementById("translate-button").disabled = false; // Enable translation

  listenForWord(); // Start listening for the word
}

// Function to fetch and display users' names and progress
function fetchAndDisplayUsers() {
  fetch("fetch_users.php")
    .then((response) => response.json())
    .then((users) => {
      const userListDiv = document.getElementById("user-list");
      userListDiv.innerHTML = ""; // Clear previous content

      users.forEach((user) => {
        const userItem = document.createElement("div");
        userItem.textContent = `${user.username}: ${user.progress} points`;
        userListDiv.appendChild(userItem); // Display user progress
      });
    })
    .catch((error) => console.error("Error fetching users:", error));
}

// Function to listen for the correct spoken word
function listenForWord() {
  if (recognition) {
    recognition.stop(); // Stop any previous recognition instance
  }

  recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US"; // Set language
  recognition.start(); // Start recognition

  // Handle recognition result
  recognition.onresult = function (event) {
    const spokenWord = event.results[0][0].transcript.toLowerCase();
    if (spokenWord === currentWord.toLowerCase()) {
      displayMessage("Correct! Well done!", "success"); // Show success message
      updateProgress1(1); // Update progress

      playCongratulatoryGif(); // Play congratulatory GIF

      // Hide GIF and sad video after 2 seconds
      setTimeout(() => {
        const congratulatoryImage = document.getElementById("congratulatory");
        const sadImage = document.getElementById("sad");

        if (congratulatoryImage && sadImage) {
          congratulatoryImage.classList.add("hidden2");
          sadImage.classList.add("hidden2");
        }
      }, 2000);

      setTimeout(generateNextWord, 1500); // Generate next word after delay
    } else {
      displayMessage("Incorrect. Please listen to the word again!", "failure"); // Show failure message
      speakWord(currentWord); // Speak the word
      playSadTune(); // Play sad tune
    }
  };

  recognition.onspeechend = function () {
    recognition.stop(); // Stop recognition when speech ends
  };

  recognition.onerror = function () {
    displayMessage("Error occurred. Please try again!", "failure"); // Handle error
  };
}

// Function to speak the word aloud
function speakWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance); // Speak the word
}

// Function to display messages (correct/incorrect)
function displayMessage(msg, type) {
  const messageBox = document.getElementById("message-box");
  messageBox.classList.remove("hidden");
  const message = document.getElementById("message");
  message.textContent = msg;
  message.className = type;
}

// Function to update progress based on difficulty level
function updateProgress1(amount) {
  let points = 0;
  if (currentLevel === "easy") {
    points = 1;
  } else if (currentLevel === "medium") {
    points = 3;
  } else if (currentLevel === "hard") {
    points = 5;
  }

  saveProgress(points); // Save progress with points
}

// Function to save the progress
function saveProgress(points) {
  fetch("update_progress.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: currentUser,
      points: points,
      level: currentLevel,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        document.getElementById("progress").textContent = `${data.newProgress} points`; // Update UI
        progress = data.newProgress; // Update local progress
      }
    });
}

// Function to play congratulatory GIF
function playCongratulatoryGif() {
  const img = document.getElementById("congratulatory");
  img.classList.remove("hidden2"); // Show GIF
  recognition.stop(); // Stop recognition
  setTimeout(generateNextWord, 1500); // Proceed to next word
}

// Function to play sad tune on incorrect word
function playSadTune() {
  const sadVideo = document.getElementById("sad");
  sadVideo.classList.remove("hidden2"); // Show sad video
  setTimeout(() => sadVideo.classList.add("hidden2"), 1500); // Hide sad video
  sadVideo.play(); // Play video
}

// Function to fetch progress
function fetchProgress(username, password) {
  fetch(`fetch_progress.php?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        document.getElementById("progress").textContent = `${data.progress} points`; // Display progress
        document.getElementById("login-page").classList.add("hidden"); // Hide login page
        document.getElementById("difficulty-page").classList.remove("hidden"); // Show difficulty selection page

        if (data.message) {
          alert(data.message); // Show any message from server
        }
      } else {
        alert("Error: " + data.message); // Handle error case
      }
    })
    .catch((error) => {
      alert("Network error: " + error.message); // Handle network errors
    });
}

// Function to translate the sentence
async function translateSentence(sentence) {
  const selectedLang = document.getElementById("language-select").value;
  const apiKey = "AIzaSyB0SJCcfQKTwcCQdEhyeDbUZ7ubT4JfWCY"; // Replace with your actual API key

  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  const requestBody = {
    q: sentence,
    target: selectedLang,
    format: "text",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    if (data.data && data.data.translations && data.data.translations[0]) {
      document.getElementById("translation").textContent =
        data.data.translations[0].translatedText;
    } else {
      document.getElementById("translation").textContent =
        "Translation not found";
    }
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("translation").textContent = "Error in translation";
  }
}

document
  .getElementById("language-select")
  .addEventListener("change", function () {
    translateSentence(currentWord); // Translate current word or sentence
  });


  
