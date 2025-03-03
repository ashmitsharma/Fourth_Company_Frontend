import React from 'react';
import DOMPurify from 'dompurify';
import './ChatMessage.css';

interface ChatMessageProps {
  text: string;
  isBot: boolean;
  timestamp: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ text, isBot, timestamp }) => {
  // Function to sanitize and prepare HTML content
  const prepareContent = (content: string) => {
    // If the content doesn't look like HTML, wrap it in a paragraph
    if (!content.includes('<')) {
      content = `<p>${content}</p>`;
    }
    
    // Sanitize HTML content
    const sanitizedContent = DOMPurify.sanitize(content, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'a', 'ul', 'li'],
      ALLOWED_ATTR: ['href', 'target', 'rel'],
    });

    return sanitizedContent;
  };

  return (
    <div className={`message-container ${isBot ? 'bot' : 'user'}`}>
      <div className="message-content">
        <div 
          className="message-text"
          dangerouslySetInnerHTML={{ __html: prepareContent(text) }}
        />
        <div className="message-timestamp">{timestamp}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
