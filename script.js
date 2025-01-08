document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");
    const overlay = document.getElementById("overlay");
    const loginPopup = document.getElementById("login-popup");
    const closePopup = document.getElementById("close-popup");
    const togglePassword = document.getElementById("toggle-password");
    const passwordInput = document.getElementById("password");

    // Show popup
    loginButton.addEventListener("click", () => {
        overlay.style.display = "block";
        loginPopup.style.display = "block";
    });

    // Close popup
    closePopup.addEventListener("click", () => {
        overlay.style.display = "none";
        loginPopup.style.display = "none";
    });

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        loginPopup.style.display = "none";
    });

    // Toggle password visibility
    togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });

    // Form validation
    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            alert("Login successful!");
            overlay.style.display = "none";
            loginPopup.style.display = "none";
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
