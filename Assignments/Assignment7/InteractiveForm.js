function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check empty fields
    if (name == "" || email == "" || password == "") {
        document.getElementById("message").innerHTML = "All fields are required";
        return false;
    }

    // Check email
    if (email.indexOf("@") == -1) {
        document.getElementById("message").innerHTML = "Invalid Email";
        return false;
    }

    // Check password length
    if (password.length < 6) {
        document.getElementById("message").innerHTML = "Password must be at least 6 characters";
        return false;
    }

    // Success message
    document.getElementById("message").innerHTML = "Form Submitted Successfully";
    return false;
}