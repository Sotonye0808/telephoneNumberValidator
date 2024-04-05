document.getElementById("check-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    const resultsDiv = document.getElementById("results-div");

    // Check if input is empty
    if (userInput.trim() === "") {
        alert("Please provide a phone number");
        return;
    }

    // Regular expression to validate US phone numbers
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;

    // Check if input matches the regex
    if (regex.test(userInput)) {
        resultsDiv.textContent = "Valid US number: " + userInput;
    } else {
        resultsDiv.textContent = "Invalid US number: " + userInput;
    }
});

// Clear results
document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("results-div").textContent = "";
});