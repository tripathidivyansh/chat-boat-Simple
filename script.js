const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // Display user message
    appendMessage('user', message);
    userInput.value = '';

    // Simulate bot response with delay
    setTimeout(() => {
        const reply = getBotResponse(message);
        appendMessage('bot', reply);
    }, 600);
}

function appendMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(`${sender}-message`);
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // auto-scroll to bottom
}

function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes('hello') || input.includes('hi')) {
        return "Hello! 👋";
    } else if (input.includes('help')) {
        return "I'm here to help. Ask me anything!";
    } else if (input.includes('bye')) {
        return "Goodbye! Have a great day! 👋";
    } else {
        return "Sorry, I didn't understand that. Try asking something else.";
    }
}

// Optional: Press Enter to send message
userInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
