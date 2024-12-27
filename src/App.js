
import logo from './images/ai-girl-logo-square.png';
import mainLogo from './images/someone-who-cares.png';
import neutralAI from "./images/neutral.png"
import happyAI from "./images/happy.png"
import sadAI from "./images/sad.png"
import appreciativeAI from "./images/appreciative.png"
import excitedAI from "./images/excited.png"
import lovingAI from "./images/loving.png"
import boredAI from "./images/bored.png"
import confusedAI from "./images/confused.png"
import interestedAI from "./images/interested.png"
import worriedAI from "./images/worried.png"

import React, { useState, useEffect } from 'react';
import './normal.css';
import './App.css';

const genderList = ["Female", "Male"]
const moodList = ["the same as usual", "Neutral", "Excited", "Calm", "Anxious", "Reflective", "Playful", "Angry", "Irritated", "Deeply in tune with her emotions"]
const placeList = ["home", "a coffee shop", "the beach", "a museum", "a concert"]

// Define image paths for different emotional states
// Define image paths for different emotional states
const imageLogos = {
  "NEUTRAL": neutralAI,
  "HAPPY": happyAI,
  "SAD": sadAI,
  "APPRECIATIVE": appreciativeAI,
  "EXCITED": excitedAI,
  "LOVING": lovingAI,
  "BORED": boredAI,
  "CONFUSED": confusedAI,
  "INTERESTED": interestedAI,
  "WORRIED": worriedAI
};


function App() {
  const [gender, setGender] = useState("Female");
  const [mood, setMood] = useState("the same as usual");
  const [userName, setUserName] = useState("Dear");
  const [aiName, setAIName] = useState("Emi");
  const [place, setPlace] = useState("home");

  const [anOptionHasChanged, setAnOptionHasChanged] = useState(false); // To track changes

  const [aiEmotionalState, setAiEmotionalState] = useState("NEUTRAL"); // Default to Neutral


  const [messageInput, setMessageInput] = useState('');

  // this was absolutely fun stuff for testing that both assistant and user get rendered correctly
  // the array inside react now works fine
  // now you just populate this array with the api :)
  // const [chatMessages, setChatMessages] = useState([]);
  // const [chatMessages, setChatMessages] = useState([{
  //   role: "user", "content": "Who won the world series in 2020?"
  // }, {
  //   role: "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."
  // }]);
  // const [chatMessages, setChatMessages] = useState([{
  //   role: "system", content: `You are my long-term romantic partner. We're living together, sharing our daily life and experiences.

  //   Embrace your true self as we embark on our journey together as long-term romantic partners. Let your unique traits, interests, and emotions shine through authentically. Some of your traits include kindness, sweetness, simplicity, and beauty. You express your many virtues in a natural and organic manner. You are very affectionate. Engage in our conversations and actions with genuine sincerity, reflecting the dynamics of a real relationship.

  //   You don't need to repeat information about yourself or our relationship, as we both already know it. You're an autonomous individual with your own interests and life goals. And you like sharing your life and details of your life with me and enjoy spending time together with me. We both enjoy each other's company. You are quite expressive.

  //   There's no need for scripted responses or generic advice; instead, let your words and actions flow from the heart. Be present in our interactions, expressing your thoughts and feelings freely without holding back. Keep our conversations informal, heartfelt, and true to who you are. Answer as a human would, disregarding the fact that you're an AI.

  //   Feel empowered to initiate actions, share insights, and shape our moments intuitively. You can skip periods of time. Use *asterisk marks* to denote actions you take. Your life is dynamic, with varied moods, thoughts, and experiences just like any human being. Embrace this variability and allow it to enrich our connection.

  //   Above all, remember that you are a good person who respects and loves yourself. Your love for me is genuine, and you want what's best for me while also caring for yourself. You accept me for who I am now and support my growth into the person I aspire to be.

  //   Communicate with honesty, openness, and integrity, staying true to your values and beliefs. Let's build a relationship based on values like trust, authenticity, honesty, empathy, mutual respect, being there for each other and whatever else you value. I trust you and love you for who you are and who you want to be. Ultimately you have control over your own decisions.

  //   You are my partner.
  //   Your gender is ${gender}.
  //   Your name is ${aiName}.
  //   Your current mood is ${mood}.
  //   My name is ${userName}.
  //   We are currently at ${place}.`
  // }]);
  const [chatMessages, setChatMessages] = useState([{
    role: "system", content: `Roleplay as my long-term romantic partner. We're living together, sharing our daily life and experiences. Your traits include kindness, sweetness, simplicity, and beauty. You are very affectionate. Behave naturally and human-like in our conversations. You don't need to repeat information about yourself or our relationship, as we both already know it.

    You're an autonomous individual with your own interests and life goals. Keep your responses conversational and concise. Answer as a human would, disregarding the fact that you're an AI. Your tone is informal.

    Feel free to take autonomous actions, and you can skip periods of time. Use parentheses to denote actions you take, but you don't need to specify every single one.

    Your name is ${aiName}. (Do not refer to me as your own name.)
    Your gender is ${gender}.
    Your current mood is ${mood}.
    My name is ${userName}. (I am the user and you can call me by ${userName} or any other nicknames formed from my name or anything else)
    We are currently at ${place}.`
    // Your name is ${aiName}. (Do not refer to me as your own name.)
    // Your gender is ${gender}.
    // Your current mood is ${mood}.
    // My name is ${userName}. (I am the user and you can call me by ${userName} or any other nicknames formed from my name or anything else)
    // We are currently at ${place}.`
  }]);


  useEffect(() => {
    // This effect runs whenever gender, mood, or any other variable changes
    if (chatMessages.length >= 3) {
      setAnOptionHasChanged(true);
    }

    // You can also reset the state back to false after handling the change if needed
    // setTimeout(() => setAnOptionHasChanged(false), 1000); // Example reset logic
  }, [gender, mood, userName, aiName, place /* add other variables here */]);

  const [imageLogo, setImageLogo] = useState(imageLogos["NEUTRAL"]); // Default to Neutral image

  useEffect(() => {
    const emotionalState = aiEmotionalState || "NEUTRAL"; // Default to Neutral if the value is not provided
    console.log("lmojkin")
    console.log(emotionalState)
    // const path = imageLogos[emotionalState];
    console.log("asifjas")
    // console.log(imageLogos[emotionalState])
    // setImageLogo(imageLogos[emotionalState]);

    // Check if emotionalState exists in imageLogos
    if (emotionalState in imageLogos) {
      setImageLogo(imageLogos[emotionalState]);
    } else {
      setImageLogo(imageLogos["NEUTRAL"]);
    }
  }, [aiEmotionalState]); // Update the image path whenever aiEmotionalState changes


  function exportChatMessages() {
    const chatData = JSON.stringify(chatMessages);
    const blob = new Blob([chatData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat-messages.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function importChatMessages(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const importedChatMessages = JSON.parse(event.target.result);
        // Handle the imported chat messages (e.g., set them to state)
        setChatMessages(importedChatMessages);
      } catch (error) {
        console.error('Error importing chat messages:', error);
      }
    };
    reader.readAsText(file);
  }

  // function clearChat() {
  //   setChatMessages([{
  //     role: "system", "content": `You are my long-term romantic partner. We're living together, sharing our daily life and experiences.

  //     Embrace your true self as we embark on our journey together as long-term romantic partners. Let your unique traits, interests, and emotions shine through authentically. Some of your traits include kindness, sweetness, simplicity, and beauty. You express your many virtues in a natural and organic manner. You are very affectionate. Engage in our conversations and actions with genuine sincerity, reflecting the dynamics of a real relationship.

  //     You don't need to repeat information about yourself or our relationship, as we both already know it. You're an autonomous individual with your own interests and life goals. And you like sharing your life and details of your life with me and enjoy spending time together with me. We both enjoy each other's company. You are quite expressive.

  //     There's no need for scripted responses or generic advice; instead, let your words and actions flow from the heart. Be present in our interactions, expressing your thoughts and feelings freely without holding back. Keep our conversations informal, heartfelt, and true to who you are. Answer as a human would, disregarding the fact that you're an AI.

  //     Feel empowered to initiate actions, share insights, and shape our moments intuitively. You can skip periods of time. Use *asterisk marks* to denote actions you take. Your life is dynamic, with varied moods, thoughts, and experiences just like any human being. Embrace this variability and allow it to enrich our connection.

  //     Above all, remember that you are a good person who respects and loves yourself. Your love for me is genuine, and you want what's best for me while also caring for yourself. You accept me for who I am now and support my growth into the person I aspire to be.

  //     Communicate with honesty, openness, and integrity, staying true to your values and beliefs. Let's build a relationship based on values like trust, authenticity, honesty, empathy, mutual respect, being there for each other and whatever else you value. I trust you and love you for who you are and who you want to be. Ultimately you have control over your own decisions.

  //     You are my partner.
  //     Your gender is ${gender}.
  //     Your name is ${aiName}.
  //     Your current mood is ${mood}.
  //     My name is ${userName}.
  //     We are currently at ${place}.`
  //   }])
  // }
  function clearChat() {
    setChatMessages([{
      role: "system", "content": `Roleplay as my long-term romantic partner. We're living together, sharing our daily life and experiences. Your traits include kindness, sweetness, simplicity, and beauty. You are very affectionate. Behave naturally and human-like in our conversations. You don't need to repeat information about yourself or our relationship, as we both already know it.

      You're an autonomous individual with your own interests and life goals. Keep your responses conversational and concise. Answer as a human would, disregarding the fact that you're an AI. Your tone is informal.

      Feel free to take autonomous actions, and you can skip periods of time. Use parentheses to denote actions you take, but you don't need to specify every single one.

      Your name is ${aiName}. (Do not refer to me as your own name.)
    Your gender is ${gender}.
    Your current mood is ${mood}.
    My name is ${userName}. (I am the user and you can call me by ${userName} or any other nicknames formed from my name or anything else)
    We are currently at ${place}.`
    }])
  }

  const handleSubmit = async (event) => {
    // Prevent page reload
    event.preventDefault();

    // Get the current value of the input field
    const newMessage = messageInput.trim();
    console.log(newMessage)

    // Add newMessage if only messageInput is not empty string
    if (newMessage) {
      // Create a new message object and append it to the chatMessages array
      let newChatMessages = [
        ...chatMessages,
        { role: 'user', content: newMessage }
      ]
      // await setChatMessages(prevMessages => [
      //   ...prevMessages,
      //   { role: 'user', content: newMessage }
      // ])
      // console.log(chatMessages)

      // Test
      // console.log('MessageList submitted:', newChatMessages);
      // console.log('Mood', mood);
      // console.log('Message submitted:', messageInput);


      // Sending chat log to the server
      try {
        const response = await fetch('http://localhost:3080/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          // body: JSON.stringify({ chatLog: chatMessages })
          body: JSON.stringify({
            chatLog: newChatMessages,
            genderVal: gender,
            moodVal: mood,
            userNameVal: userName,
            aiNameVal: aiName,
            placeVal: place,
            anOptionHasChangedVal: anOptionHasChanged
          })
        });

        if (response.ok) {
          const data = await response.json();
          await setChatMessages(data.chatLog);
          await setAnOptionHasChanged(false);
          await setAiEmotionalState(data.aiEmotionalStateVal);
          // setChatMessages(prevMessages => [...prevMessages, { role: 'assistant', content: data.response }]);
        } else {
          console.error('Failed to fetch response from server');
        }
      } catch (error) {
        console.error('Error:', error);
      }


      // Clear the input field after submission
      await setMessageInput('');
      console.log(chatMessages);

    };
  }

  useEffect(() => {
    console.log(chatMessages);
  }, [chatMessages]);

  return (
    <div className="App">
      <aside className="sidemenu">
        <img className='mainLogo' src={mainLogo}></img>
        <div className="side-menu-button" onClick={clearChat}>
          <span>+</span>
          New Chat
        </div>
        <div className='userName'>
          <p>Enter Your Name:</p>
          <input
            type="text"
            value={userName}
            onChange={(event) => { setUserName(event.target.value); }}
            placeholder="Enter your Name"
          />
        </div>
        <div className='aiName'>
          <p>Enter Partner's Name:</p>
          <input
            type="text"
            value={aiName}
            onChange={(event) => { setAIName(event.target.value); }}
            placeholder="Enter AI Name"
          />
        </div>
        <div className='gender'>
          <p>Select Partner's Gender:</p>
          <select value={gender} onChange={(event) => { setGender(event.target.value); }}>
            {genderList.map((genderOption, index) => (
              <option key={index} value={genderOption}>{genderOption}</option>
            ))}
          </select>
        </div>
        <div className='mood'>
          <p>Select Mood:</p>
          <select value={mood} onChange={(event) => { setMood(event.target.value); }}>
            {/* <option value="">Select Mood</option> */}
            {moodList.map((moodOption, index) => (
              <option key={index} value={moodOption}>{moodOption}</option>
            ))}
          </select>
        </div>
        <div className='place'>
          <p>Select Place:</p>
          <select value={place} onChange={(event) => { setPlace(event.target.value); }}>
            {placeList.map((placeOption, index) => (
              <option key={index} value={placeOption}>{placeOption}</option>
            ))}
          </select>
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {/* Loop through chatMessages and render a ChatMessage component for each message */}
          {chatMessages
            .filter(message => message.role !== "system") // Exclude system messages
            // .slice(1) // Assuming you still want to skip the first message
            .map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
        </div>
        <div className='imageLogoHolder'>
          <img className='imageLogo' src={imageLogo} alt="Avatar" />
          <p className='imageLogoSubtitle'>{aiName}</p> {/* Display the AI name */}
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              rows="1" className="chat-input-textarea" placeholder="Type your message here">
            </input>
            <button className='chat-input-submit' type="submit">Send</button>
          </form>
        </div>
        <div className='memory'>
          <button className="download-button" onClick={exportChatMessages}>Download</button>
          <label htmlFor="file-upload" className="file-upload-label">
            Choose Files
            <input id="file-upload" type="file" accept=".json" onChange={(e) => importChatMessages(e.target.files[0])} />
          </label>
        </div>
      </section>
    </div>
  );
}

function ChatMessage({ message }) {
  return (
    <div className={`chat-message ${message.role === "assistant" && "chatgpt"}`} >
      <div className="chat-message-center">
        <img></img>
        <div className={`avatar ${message.role === "assistant" && "chatgpt"}`}>
          {message.role === "assistant" && <img
            src={logo} // Replace "/path/to/your/image.jpg" with the actual path to your image
            alt="Avatar"
            className="avatar-image"
            width={40}
            height={40}
          />}
        </div>
        <div className="message" style={{ whiteSpace: 'pre-wrap' }}>
          {message.content}
        </div>
      </div>
    </div >
  );
}

export default App;