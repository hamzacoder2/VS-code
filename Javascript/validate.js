// validate.js
// Input validation using JavaScript

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const message = document.getElementById("message");

        // Name validation
        if (name === "") {
            message.textContent = "Name is required.";
            return;
        }

        // Email validation
        if (!validateEmail(email)) {
            message.textContent = "Please enter a valid email address.";
            return;
        }

        // Password validation
        if (password.length < 6) {
            message.textContent = "Password must be at least 6 characters long.";
            return;
        }

        // If all validations pass
        message.textContent = "Form submitted successfully!";
        form.reset();
    });
});

// Email validation function
function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
