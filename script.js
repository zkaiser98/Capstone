// script.js
document.getElementById('send-btn').onclick = function() {
    var userInput = document.getElementById('chat-input').value;
    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    })
        .then(response => response.json())
        .then(data => {
            var chatBox = document.getElementById('chat-box');
            chatBox.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;
            chatBox.innerHTML += `<div><strong>GPT:</strong> ${data.response}</div>`;
            document.getElementById('chat-input').value = ''; // Clear input box
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
        })
        .catch(error => console.error('Error:', error));
};
