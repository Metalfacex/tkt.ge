// login
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const togglePassword = document.getElementById("toggle-password");
const loginButton = document.getElementById("login-btn");

// Email validation
emailInput.addEventListener("input", () => {
  const emailValue = emailInput.value;
  if (!emailValue.includes("@")) {
    emailInput.classList.add("error");
    emailError.style.display = "block";
  } else {
    emailInput.classList.remove("error");
    emailError.style.display = "none";
  }
});

// Password validation
passwordInput.addEventListener("input", () => {
  const passwordValue = passwordInput.value;
  if (passwordValue.length < 8) {
    passwordInput.classList.add("error");
    passwordError.style.display = "block";
  } else {
    passwordInput.classList.remove("error");
    passwordError.style.display = "none";
  }
});

// Toggle password visibility
togglePassword.addEventListener("click", () => {
  const icon = togglePassword.querySelector("i");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
});

// Login button validation
loginButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission (if inside a form)
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (!emailValue.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }

  if (passwordValue.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  // If both validations pass
  alert("Logged in");
});
document.getElementById("register-password").addEventListener("input", function () {
    const password = this.value;
    const passwordStrength = document.getElementById("password-strength");
  
    if (!password) {
      // Empty password case
      passwordStrength.textContent = "";
      passwordStrength.className = "password-strength";
    } else if (/^[a-zA-Z]+$/.test(password)) {
      // Weak: Only English letters (no numbers, special characters)
      passwordStrength.textContent = "Weak: Only English characters.";
      passwordStrength.className = "password-strength weak";
    } else if (/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(password) && !/[A-Z]/.test(password)) {
      // Medium: Contains English letters and numbers, but no uppercase
      passwordStrength.textContent = "Medium: English characters and numbers.";
      passwordStrength.className = "password-strength medium";
    } else if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/.test(password)
    ) {
      // Strong: Contains uppercase, lowercase English letters, and numbers
      passwordStrength.textContent = "Strong: Uppercase, lowercase, and numbers.";
      passwordStrength.className = "password-strength strong";
    } else {
      // Default case for unexpected inputs
      passwordStrength.textContent = "Weak: Invalid combination.";
      passwordStrength.className = "password-strength weak";
    }
  });
  
  document.getElementById("register-btn").addEventListener("click", function (event) {
    event.preventDefault();
  
    const emailInput = document.getElementById("register-email");
    const emailError = document.getElementById("register-email-error");
    const passwordInput = document.getElementById("register-password");
    const passwordError = document.getElementById("register-password-error");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const confirmPasswordError = document.getElementById("confirm-password-error");
    const mobileInput = document.getElementById("mobile");
    const mobileError = document.getElementById("mobile-error");
  
    let valid = true;
  
    // Email validation
    const emailValue = emailInput.value;
    if (!emailValue.includes("@") || emailValue.split("@")[1].length < 2) {
      emailError.style.display = "block";
      emailInput.classList.add("error");
      valid = false;
    } else {
      emailError.style.display = "none";
      emailInput.classList.remove("error");
    }
  
    // Password validation
    const passwordValue = passwordInput.value;
    if (passwordValue.length < 8) {
      passwordError.style.display = "block";
      passwordInput.classList.add("error");
      valid = false;
    } else {
      passwordError.style.display = "none";
      passwordInput.classList.remove("error");
    }
  
    // Confirm password validation
    const confirmPasswordValue = confirmPasswordInput.value;
    if (passwordValue !== confirmPasswordValue) {
      confirmPasswordError.style.display = "block";
      confirmPasswordInput.classList.add("error");
      valid = false;
    } else {
      confirmPasswordError.style.display = "none";
      confirmPasswordInput.classList.remove("error");
    }
  
    // Mobile number validation
    const mobileValue = mobileInput.value;
    if (!/^\d+$/.test(mobileValue)) {
      mobileError.style.display = "block";
      mobileInput.classList.add("error");
      valid = false;
    } else {
      mobileError.style.display = "none";
      mobileInput.classList.remove("error");
    }
  
    // If all validations pass
    if (valid) {
        alert("Registration successful!");
        document.querySelector("#register-popup").style.display="none";
        document.querySelector("#loginpop").style.display="none";
        
    
    }
  });

//closinglog and showing it
document.getElementById("login-button").addEventListener("click", function(){
    document.querySelector("#loginpop").style.display="flex";
})
document.getElementById("closed").addEventListener("click", function(){
    document.querySelector("#loginpop").style.display="none";
})
document.getElementById("reglink").addEventListener("click", function(){
    document.querySelector("#register-popup").style.display="none";
})
document.getElementById("reglink").addEventListener("click", function(){
    document.querySelector("#register-popup").style.display="flex";
})
document.getElementById("register-close").addEventListener("click", function(){
    document.querySelector("#register-popup").style.display="none";
})




// slider
const slides = [
    'https://tkt.ge/_next/image?url=https%3A%2F%2Fstatic.tkt.ge%2Fimg%2Fe14a5852-727b-466a-a705-2e5a0a05083c.jpeg&w=1920&q=75',
    'https://tkt.ge/_next/image?url=https%3A%2F%2Fstatic.tkt.ge%2Fimg%2Fafdd9e49-7d41-4eca-881a-cc560c5642e4.jpeg&w=1920&q=75',
    'https://tkt.ge/_next/image?url=https%3A%2F%2Fstatic.tkt.ge%2Fimg%2F70c5f3e7-d981-45fd-9a47-b8e273c7fa25.jpeg&w=1920&q=75'
];

let currentSlide = 0;
const slider = document.querySelector('.slider img');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');


function updateMainSlider() {
    slider.src = slides[currentSlide];
}

leftArrow.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    updateMainSlider();
});

rightArrow.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateMainSlider();
});

const popularBoxes = document.querySelectorAll('.popular-box');
const popularLeft = document.querySelector('.popular-arrow.left');
const popularRight = document.querySelector('.popular-arrow.right');
let popularStart = 0;

popularLeft.addEventListener('click', () => {
    popularStart = (popularStart > 0) ? popularStart - 3 : popularBoxes.length - 3;
    updatePopularSlider();
});

popularRight.addEventListener('click', () => {
    popularStart = (popularStart + 3) % popularBoxes.length;
    updatePopularSlider();
});

function updatePopularSlider() {
    popularBoxes.forEach((box, index) => {
        const position = (index - popularStart + popularBoxes.length) % popularBoxes.length;
        box.style.order = position;

       
        if (position >= 0 && position < 3) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
}


updateMainSlider();
updatePopularSlider();





const dateSlider = document.getElementById("date-slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const currentMonthLabel = document.getElementById("current-month");

const today = new Date();
const startDate = new Date(today);
startDate.setDate(1); // Start from the first of the current month
startDate.setMonth(today.getMonth()); // Start 1 month back
const endDate = new Date(today);
endDate.setMonth(today.getMonth() + 2); // End 2 months ahead

// Function to generate dates dynamically
function generateDates(start, end) {
    let currentDate = new Date(start);
    while (currentDate <= end) {
        const day = currentDate.getDate();
        const weekDay = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
        const month = currentDate.toLocaleDateString('en-US', { month: 'short' });

        const dateDiv = document.createElement("div");
        dateDiv.className = "date-item";
        dateDiv.dataset.month = month; // Store the month for tracking
        if (currentDate.toDateString() === today.toDateString()) {
            dateDiv.classList.add("today");
        }
        if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
            dateDiv.classList.add("weekend");
        }

        dateDiv.innerHTML = `
            <div class="date-month">${month}</div>
            <div class="date-day">${day}</div>
            <div class="date-weekday">${weekDay}</div>
        `;
        dateSlider.appendChild(dateDiv);

        // Increment by 1 day
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

// Function to update the displayed month
function updateCurrentMonth() {
    const firstVisibleItem = [...dateSlider.children].find((child) => {
        const rect = child.getBoundingClientRect();
        return rect.left >= dateSlider.getBoundingClientRect().left;
    });

    if (firstVisibleItem) {
        const visibleMonth = firstVisibleItem.dataset.month;
        currentMonthLabel.textContent = visibleMonth;
    }
}

// Generate the dates for the slider
generateDates(startDate, endDate);

// Initial update of the month label
updateCurrentMonth();

// Scroll buttons functionality
prevBtn.addEventListener("click", () => {
    dateSlider.scrollBy({ left: -300, behavior: "smooth" });
    setTimeout(updateCurrentMonth, 300); // Delay to allow scroll to complete
});

nextBtn.addEventListener("click", () => {
    dateSlider.scrollBy({ left: 300, behavior: "smooth" });
    setTimeout(updateCurrentMonth, 300); // Delay to allow scroll to complete
});

// Update the month as the user scrolls
dateSlider.addEventListener("scroll", () => {
    updateCurrentMonth();
});



const altPopularBoxes = document.querySelectorAll('.alt-popular-box');
const altPopularLeft = document.querySelector('.alt-popular-arrow.alt-left');
const altPopularRight = document.querySelector('.alt-popular-arrow.alt-right');
let altPopularStart = 0;

altPopularLeft.addEventListener('click', () => {
    altPopularStart = (altPopularStart > 0) ? altPopularStart - 3 : altPopularBoxes.length - 3;
    updateAltPopularSlider();
});

altPopularRight.addEventListener('click', () => {
    altPopularStart = (altPopularStart + 3) % altPopularBoxes.length;
    updateAltPopularSlider();
});

function updateAltPopularSlider() {
    altPopularBoxes.forEach((box, index) => {
        const position = (index - altPopularStart + altPopularBoxes.length) % altPopularBoxes.length;
        box.style.order = position;

        if (position >= 0 && position < 3) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
}

updateAltPopularSlider();
