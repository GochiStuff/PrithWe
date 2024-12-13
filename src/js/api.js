// Initialize EmailJS
(function() {
    emailjs.init("OuAYh8F-H0qjAayB7");  // Replace with your EmailJS User ID
})();

// Handle form submission
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    
    // Send email via EmailJS
    const templateParams = {
        email: email,
    };

    emailjs.send("default_service", "template_6ambdah", templateParams) // Replace with your EmailJS Service ID and Template ID
        .then(function(response) {
            // Success message
            document.getElementById("success-message").innerText = "Thank you for subscribing!";
            document.getElementById("email").value = ''; // Clear the input field
        }, function(error) {
            // Error message
            document.getElementById("success-message").innerText = "Oops! Something went wrong.";
        });
});