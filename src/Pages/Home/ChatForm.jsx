import React, { useRef } from 'react'

const responses = {
  hello: "Hi there! How are you feeling today?",
  sad: "I'm here for you. It's okay to feel this way. Do you want to talk about it?",
  stress: "Deep breathing can help reduce stress. Try inhaling for 4 seconds, holding for 4, and exhaling for 6.",
  anxious: "You're not alone. Would you like some self-care tips or breathing exercises?",
  motivation: "You are stronger than you think! Just take one step at a time. 😊",
  default: "I'm here to help. Can you tell me more about how you're feeling?",
  thank: "You're welcome, feel free to voice out, I'm all ears!"
};


const ChatForm = ({setChatHistory}) => {

    const inputRef = useRef()
    function handleSubmit(e){
        e.preventDefault();

        const userMessage = inputRef.current.value.trim();
        if(!userMessage){return}


        setChatHistory((history) =>[...history, {role: "user", text:userMessage}]);

        const lowerInput = inputRef.current.value.toLowerCase();
        inputRef.current.value = ""
        const botResponse =
          responses[Object.keys(responses).find(key => lowerInput.includes(key))] || responses.default;
    
        setTimeout(() => {
          setChatHistory(prevMessages => [...prevMessages, { role: "model" , text: botResponse}]);
        }, 1500);
    
    }

  return (
        <form action="#" className="chat-form" onSubmit={handleSubmit}>
                    <input ref = {inputRef} type ="text" placeholder = "Enter Message..." className="message-input" required/>
                    <button className="material-symbols-outlined">arrow_upward
                    </button>
        </form>
  )
}

export default ChatForm
