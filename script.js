// script.js

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get the "Contact Us" section
    var contactSection = document.querySelector('section:nth-child(2)');

    // Add a click event listener to the "Contact Us" section
    contactSection.addEventListener('click', function () {
        // Display a message when the section is clicked
        console.log('Contact section clicked!');
    });
});
