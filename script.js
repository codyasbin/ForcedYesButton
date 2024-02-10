document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("message").innerText = "Thank you for accepting! Happy Valentine's Day!";
    document.getElementById("message").style.display = "block";
});

document.getElementById("noButton").addEventListener("mouseover", moveNoButton);

function moveNoButton(event) {
    var button = event.target;
    var buttonRect = button.getBoundingClientRect();
    var cursorX = event.clientX;
    var cursorY = event.clientY;

    var distance = 50; // Adjust the distance between the cursor and the button

    // Calculate new button position based on cursor position and hover direction
    var newButtonX, newButtonY;

    if (cursorX < window.innerWidth / 2) {
        newButtonX = cursorX + distance - buttonRect.width / 2; // Move to the right
    } else {
        newButtonX = cursorX - distance - buttonRect.width / 2; // Move to the left
    }

    if (cursorY < window.innerHeight / 2) {
        newButtonY = cursorY + distance - buttonRect.height / 2; // Move towards the bottom
    } else {
        newButtonY = cursorY - distance - buttonRect.height / 2; // Move towards the top
    }

    // Ensure the button doesn't go off-screen
    newButtonX = Math.max(0, Math.min(window.innerWidth - buttonRect.width, newButtonX));
    newButtonY = Math.max(0, Math.min(window.innerHeight - buttonRect.height, newButtonY));

    // Update button position
    button.style.left = newButtonX + "px";
    button.style.top = newButtonY + "px";
}

