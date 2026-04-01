let form = document.getElementById("signupForm");
let message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Email pattern
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validation
    if (name === "" || email === "" || password === "") {
        message.style.color = "red";
        message.textContent = "All fields are required!";
    }
    else if (!email.match(emailPattern)) {
        message.style.color = "red";
        message.textContent = "Invalid email format!";
    }
    else if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters!";
    }
    else {
        message.style.color = "green";
        message.textContent = "Signup successful ✅";
    }
});