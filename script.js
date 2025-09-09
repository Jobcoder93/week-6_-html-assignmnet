// ==========================
// Light/Dark Theme Toggle
// ==========================
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = 
    document.body.classList.contains("dark-mode") 
      ? "Switch to Light Mode 🌞" 
      : "Switch to Dark Mode 🌙";
});

// ==========================
// Counter Game
// ==========================
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counter.textContent = count;
  animateCounter();
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  counter.textContent = count;
  animateCounter();
});

// Small animation for counter text
function animateCounter() {
  counter.style.transform = "scale(1.3)";
  setTimeout(() => {
    counter.style.transform = "scale(1)";
  }, 200);
}

// ==========================
// FAQ Section (Toggle Answers)
// ==========================
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    // Toggle animation
    if (answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.classList.add("hidden");
      answer.style.maxHeight = "0";
    }
  });
});

// ==========================
// Form Validation
// ==========================
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation rules
  if (name.length < 3) {
    showMessage("Name must be at least 3 characters long.", "red");
    return;
  }

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!emailRegex.test(email)) {
    showMessage("Please enter a valid email address.", "red");
    return;
  }

  if (password.length < 6) {
    showMessage("Password must be at least 6 characters long.", "red");
    return;
  }

  // Success feedback
  showMessage("Signup successful! 🎉 Welcome aboard!", "green");
  form.reset();
});

// Helper to show styled messages
function showMessage(message, color) {
  formMessage.textContent = message;
  formMessage.style.color = color;

  // Fade in effect
  formMessage.style.opacity = 0;
  let opacity = 0;
  const fade = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.05;
      formMessage.style.opacity = opacity;
    } else {
      clearInterval(fade);
    }
  }, 30);
}

