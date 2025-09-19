/*
========================================
SIMPLE FORM VALIDATION
========================================
*/

// A function is a block of code designed to perform a particular task. [cite: 2577]
function validateForm() {

    // Get the values from the input fields 
    var name = document.getElementById("contactName").value;
    var email = document.getElementById("contactEmail").value;
    var message = document.getElementById("contactMessage").value;

    // Use the trim() method to remove whitespace from both sides of a string. 
    // Use an 'if' statement to check if the name field is empty. 
    if (name.trim() == "") {
        // Show an alert box if the condition is true. [cite: 2639, 2640]
        alert("Please enter your name.");
        // Return false to stop the form from submitting. 
        return false;
    }

    // Check if the email field is empty
    if (email.trim() == "") {
        alert("Please enter your email address.");
        return false;
    }

    // Check if the message field is empty
    if (message.trim() == "") {
        alert("Please enter your message.");
        return false;
    }

    // If all checks pass, show a success message
    alert("Thank you! Your message has been sent.");
    // Return true to allow the form to submit (optional, as it's the default behavior)
    return true;
}