const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const user = {
            name: name,
            email: email,
            phone: phone,
            password: password
        };

        localStorage.setItem("eventUser", JSON.stringify(user));

        alert("Registration completed successfully!");

        window.location.href = "login.html";
    });
}

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Registration completed successfully!");

    window.location.href = "login.html";

});
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const storedUser = JSON.parse(
            localStorage.getItem("eventUser")
        );

        if (!storedUser) {
            alert("Please register first!");
            window.location.href = "register.html";
            return;
        }

        if (
            email === storedUser.email &&
            password === storedUser.password
        ) {

            alert("Login successful!");

            window.location.href = "events.html";

        } else {

            alert("Invalid email or password!");

        }
    });
}
