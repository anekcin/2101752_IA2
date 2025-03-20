//Functionality for Login Page
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Login Details
    const storedUsername = "admin";
    const storedPassword = "password123";

    // Getting user input
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    // Validating 
    if (username === storedUsername && password === storedPassword) {
        window.location.href = "./public/product.html"; 
    } else {
        errorMessage.textContent = "Incorrect username or password.";
    }
});

