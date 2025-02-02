document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    const passwordInput = document.getElementById("password");
    const togglePasswordBtn = document.querySelector(".toggle-password");

    togglePasswordBtn.addEventListener("click", function () {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        togglePasswordBtn.textContent = type === "password" ? "Show" : "Hide";
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = passwordInput.value;

        // Example authentication (replace with your own logic)
        if (password === "12022007") {
            // Store username in localStorage for later use
            localStorage.setItem("username", username || "Guest");

            // Redirect to index.html after successful login
            window.location.href = "main.html";
        } else {
            alert("Incorrect password. Please try again.");
        }
    });

    // Function to greet user by username
    function greetUser() {
        const username = localStorage.getItem("username") || "Guest";
        const welcomeMessage = document.createElement("div");
        welcomeMessage.textContent = `Welcome, ${username}!`;
        welcomeMessage.classList.add("welcome-message");

        // Append welcome message to the document body
        console.log(welcomeMessage);
    }

    // Call greetUser function if username is stored in localStorage
    if (localStorage.getItem("username")) {
        greetUser();
    }
});
