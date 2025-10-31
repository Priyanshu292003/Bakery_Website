document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (name.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);

        form.style.display = "none";

        console.log("Form submitted successfully!");

        form.reset();
    });
});


document.addEventListener("DOMContentLoaded", function() {
                const welcomeAnimation = document.querySelector('.welcome-animation');
                const mainContent = document.querySelector('main');

                
                welcomeAnimation.addEventListener('animationend', function() {
                    welcomeAnimation.style.display = 'none';
                });

                
                welcomeAnimation.addEventListener('animationend', function() {
                    mainContent.style.display = 'block';
                });

                
                setTimeout(function() {
                    welcomeAnimation.style.width = '0%';
                }, 1500); 
            });