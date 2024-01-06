<!-- adjustInputWidth set where the icons should appear on the Password section -->
function adjustInputWidth() {
    var passwordField = document.getElementById("currentPassword");
    var characterWidth = 10;
    var padding = 20;
    var width = passwordField.value.length * characterWidth + padding;
    passwordField.style.width = width + 'px';
}

// Initial adjustment
adjustInputWidth();

// toggle the visibility of the users current password
function toggleCurrentPassword() {
    var currentPassword = document.getElementById("currentPassword");
    if (currentPassword.type === "password") {
        currentPassword.type = "text";
    } else {
        currentPassword.type = "password";
    }
}

// toggle the visibility of the users new password
function togglePasswordInputVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// toggle the text field for each update section
function enableEditing(inputId) {
    var inputField = document.getElementById(inputId);
    inputField.disabled = false;
    inputField.focus(); // Optional: Set focus to the input field
}

function disableField(inputId) {
    var inputField = document.getElementById(inputId);
    inputField.disabled = true;
}

//  Logic for the dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.campaign-dropdown');
    var dropdownMenu = document.getElementById('campaign-drop-down');

    dropdown.onclick = function(event) {
        dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
        // Prevent this click from propagating to the window
        event.stopPropagation();
    };

    // Close the dropdown if clicked outside
    window.onclick = function(event) {
        if (!dropdownMenu.contains(event.target) && !dropdown.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    };
});

