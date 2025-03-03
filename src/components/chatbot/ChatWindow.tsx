import React from 'react';
import ChatMessage from './ChatMessage';
import './ChatWindow.css';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: string;
}

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isTyping, messagesEndRef }) => {
  return (
    <div className="chat-window">
      <div className="messages-container">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            text={message.text}
            isBot={message.isBot}
            timestamp={message.timestamp}
          />
        ))}
        {isTyping && (
          <div className="typing-indicator">
            <span>Someone is typing...</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatWindow;
