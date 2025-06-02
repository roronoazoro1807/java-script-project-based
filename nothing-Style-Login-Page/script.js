// Theme Management
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem("theme") || "dark";
if (currentTheme === "light") {
  body.setAttribute("data-theme", "light");
}

// Theme toggle functionality
themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  if (newTheme === "light") {
    body.setAttribute("data-theme", "light");
  } else {
    body.removeAttribute("data-theme");
  }

  localStorage.setItem("theme", newTheme);
});

// Form Elements
const form = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");
const btnText = document.getElementById("btnText");
const loadingDots = document.getElementById("loadingDots");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Validation Functions
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(errorElement, message = null) {
  if (message) {
    errorElement.textContent = message;
  }
  errorElement.style.display = "block";
  setTimeout(() => {
    errorElement.style.display = "none";
  }, 3000);
}

function hideError(errorElement) {
  errorElement.style.display = "none";
}

// Input Event Listeners
emailInput.addEventListener("input", () => {
  hideError(emailError);
});

passwordInput.addEventListener("input", () => {
  hideError(passwordError);
});

// Add focus effects to inputs
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.style.transform = "translateY(-1px)";
  });

  input.addEventListener("blur", () => {
    input.style.transform = "translateY(0)";
  });
});

// Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Reset errors
  hideError(emailError);
  hideError(passwordError);

  let hasError = false;

  // Email validation
  if (!email) {
    showError(emailError, "Email is required");
    hasError = true;
  } else if (!validateEmail(email)) {
    showError(emailError, "Invalid email format");
    hasError = true;
  }

  // Password validation
  if (!password) {
    showError(passwordError, "Password is required");
    hasError = true;
  } else if (password.length < 6) {
    showError(passwordError, "Password too short");
    hasError = true;
  }

  if (hasError) return;

  // Show loading state
  showLoadingState();

  // Simulate login process
  setTimeout(() => {
    hideLoadingState();
    handleLoginSuccess(email);
  }, 2000);
});

function showLoadingState() {
  btnText.style.display = "none";
  loadingDots.style.display = "flex";
  loginBtn.disabled = true;

  // Disable form inputs
  inputs.forEach((input) => {
    input.disabled = true;
  });
}

function hideLoadingState() {
  btnText.style.display = "inline";
  loadingDots.style.display = "none";
  loginBtn.disabled = false;

  // Re-enable form inputs
  inputs.forEach((input) => {
    input.disabled = false;
  });
}

function handleLoginSuccess(email) {
  // In a real app, you would redirect or update the UI
  alert(
    `Login simulation complete!\nEmail: ${email}\n\nIn a real app, you'd be redirected to the dashboard.`
  );

  // Reset form for demo purposes
  form.reset();
}

// Enhanced dot matrix heading effects
const dotMatrixHeading = document.querySelector(".dot-matrix-heading");

// Glitch effect temporarily disabled
// function triggerGlitchEffect() {
//   dotMatrixHeading.style.animation = "none";
//   dotMatrixHeading.style.textShadow = `
//     2px 0 var(--text-color),
//     -2px 0 var(--error-color),
//     0 0 10px var(--text-color)`;

//   setTimeout(() => {
//     dotMatrixHeading.style.animation =
//       "dotMatrixGlow 3s ease-in-out infinite alternate";
//     dotMatrixHeading.style.textShadow = "";
//   }, 150);
// }

// // Trigger glitch effect randomly every 8-15 seconds
// setInterval(triggerGlitchEffect, Math.random() * 7000 + 8000);

// Enhanced keyboard navigation
document.addEventListener("keydown", (e) => {
  // Tab navigation enhancement
  if (e.key === "Tab") {
    const focusableElements = document.querySelectorAll(
      'input, button, a, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }

  // Enter key on theme toggle
  if (e.key === "Enter" && document.activeElement === themeToggle) {
    themeToggle.click();
  }
});

// Add tab index to theme toggle for accessibility
themeToggle.setAttribute("tabindex", "0");
themeToggle.setAttribute("role", "button");
themeToggle.setAttribute("aria-label", "Toggle theme");

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Focus first input on load
  setTimeout(() => {
    emailInput.focus();
  }, 600); // After animation completes

  // Add entrance animation to heading
  dotMatrixHeading.style.opacity = "0";
  dotMatrixHeading.style.transform = "translateY(-20px)";

  setTimeout(() => {
    dotMatrixHeading.style.transition = "all 0.8s ease-out";
    dotMatrixHeading.style.opacity = "1";
    dotMatrixHeading.style.transform = "translateY(0)";
  }, 200);
});
