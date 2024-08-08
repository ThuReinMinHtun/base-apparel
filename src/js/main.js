document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput= document.getElementById("email-input");
    const errorIcon = document.getElementById("error-icon");
    const errorText = document.getElementById("error-text");
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        // show error message and icon if email is invalid
        emailInput.classList.add("border-red-500");
        errorIcon.classList.remove("hidden");
        errorText.classList.remove("hidden");
    } else {
        // hide error message and icon if email is valid
        emailInput.classList.remove("border-red-500");
        errorIcon.classList.add("hidden");
        errorText.classList.add("hidden");
    }
});