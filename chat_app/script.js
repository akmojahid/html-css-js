// Get elements
const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('messages');
const chatMain = document.getElementById('chat-main');
const msgInput = document.getElementById('msg');

// Replace 'your-api-key' with your actual OpenAI API key
const OPENAI_API_KEY;
// Handle form submission
chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get the message text
  const msg = msgInput.value;

  // Display user's message
  addMessage(msg, 'user-message');

  // Clear input
  msgInput.value = '';

  // Get AI response
  const response = await getAIResponse(msg);

  // Display AI's message
  addMessage(response, 'ai-message');

  // Scroll to the bottom
  chatMain.scrollTop = chatMain.scrollHeight;
});

// Function to display a message
function addMessage(message, className) {
  const div = document.createElement('div');
  div.classList.add('message', className);
  div.textContent = message;
  chatMessages.appendChild(div);
}

// Function to call OpenAI API
async function getAIResponse(message) {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}` // Replace with your actual key
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // You can change the model as per your requirements
        messages: [{ role: "user", content: message }],
        max_tokens: 150,
        temperature: 0.7 // Adjust temperature if needed for more creative responses
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    // Ensure the response has the expected structure
    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content.trim();
    } else {
      throw new Error("No response received from OpenAI");
    }
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Sorry, I am having trouble responding right now. Please try again later.";
  }
}

let res = await getAIResponse('Hello')
console.log(res)