// Button click event
document.getElementById("changeTextButton").addEventListener("click", function() {
    this.textContent = "You clicked me!";
    this.style.backgroundColor = "lightblue";
});

// Hover effect
document.getElementById("hoverEffectBox").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightgreen";
});
document.getElementById("hoverEffectBox").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightgray";
});

// Keypress detection
document.getElementById("keypressInput").addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});

// Double-click for a secret action
document.getElementById("doubleClickBox").addEventListener("dblclick", function() {
    alert("Secret action triggered!");
});

// Image Gallery (slideshow or hover effect)
let images = document.querySelectorAll(".galleryImage");
images.forEach((image, index) => {
    image.addEventListener("click", () => {
        alert("You clicked image " + (index + 1));
    });
});

// Tab functionality for accordion-style content
function toggleTab(tabIndex) {
    let contents = document.querySelectorAll(".tabContent");
    contents.forEach((content, index) => {
        content.style.display = (index === tabIndex) ? "block" : "none";
    });
}

// Form Validation
document.getElementById("signupForm").addEventListener("submit", function(event) {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Validate username
    if (username === "") {
        alert("Username is required.");
        event.preventDefault();
        return;
    }

    // Validate email format
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        event.preventDefault();
        return;
    }

    // Validate password length
    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        event.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});
