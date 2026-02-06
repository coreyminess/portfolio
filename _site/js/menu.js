document.addEventListener("DOMContentLoaded", function () {
    // Track the menu state
    let menuOpen = false;

    // Get the burger button element
    const burgerButton = document.getElementById("burger");

    // Add click event listener
    burgerButton.addEventListener("click", function () {
        // Toggle menu state
        menuOpen = !menuOpen;

        // Get nav-links__avatar elements
        const avatars = document.querySelectorAll(".nav-links__avatar");

        if (menuOpen) {
            // When menu opens
            document.getElementById("nav-links").style.background = "#161615";

            // Show avatars
            avatars.forEach(avatar => {
                avatar.style.display = "block";
            });

            // Change all spans inside the label that follows an input in the body
            const spans = document.querySelectorAll("body input + label span");
            spans.forEach(span => {
                span.style.background = "white";
            });
        } else {
            // When menu closes
            document.getElementById("nav-links").style.background = "none";

            // Hide avatars
            avatars.forEach(avatar => {
                avatar.style.display = "none";
            });

            // Reset all spans inside the label that follows an input in the body
            const spans = document.querySelectorAll("body input + label span");
            spans.forEach(span => {
                span.style.background = "white";
            });
        }
    });
});