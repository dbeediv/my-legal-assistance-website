// Function to convert text to speech using the Web Speech API
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";  // Set language to English (US)
    window.speechSynthesis.speak(speech);
}

// Event listener for the "Ask Question" button
document.getElementById('askButton').addEventListener('click', function() {
    const question = document.getElementById('questionInput').value;  // Get user input
    if (question) {
        // Here, you can implement logic for answering based on the question
        speak("You asked: " + question + ". I will help you with that.");
    } else {
        speak("Please enter a question.");
    }
});

// Event listener for the "1-to-1 Call" button
document.getElementById('callButton').addEventListener('click', function() {
    const password = document.getElementById('password').value;  // Get password input
    if (password === "secret123") {  // Simple password validation (Replace with actual security)
        speak("Starting your 1-to-1 call now.");
        // Here, you could implement actual call integration with a service like Twilio, Agora, etc.
    } else {
        speak("Incorrect password. Please try again.");
    }
});
