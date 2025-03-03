import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import ChatWindow from './ChatWindow';
import { websiteContext } from './websiteContext';
import './ChatBot.css';

interface UserInfo {
  fullName: string;
  email: string;
  phone: string;
}

const CACHED_CONTEXT = `You are a customer service AI assistant for Hashtech Info. Only answer questions related to the company and its services. For any questions outside this scope, politely inform that you can only assist with Hashtech Info related queries.

Context about our company:
${websiteContext}

Response Guidelines:
1. Structure your responses using these HTML elements:
   - Use <p> for paragraphs
   - Use <strong> for emphasis
   - Use <a> for links (format: <a href="URL">text</a>)
   - Use <ul> and <li> for lists
   - Use <br> for line breaks when needed

2. Format your responses following these rules:
   - Keep paragraphs concise and focused
   - Use bullet points for lists of items
   - Make important information stand out using <strong>
   - Always use proper HTML tags for links
   - Maintain a professional and friendly tone
`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean; timestamp: string }>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showUserForm, setShowUserForm] = useState(true);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showPrompt, setShowPrompt] = useState(true);
  const [userQuestions, setUserQuestions] = useState<string[]>([]);
  const [hasReachedLimit, setHasReachedLimit] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const promptInterval = setInterval(() => {
      if (!isOpen) {
        setShowPrompt(prev => !prev);
      }
    }, 5000);

    return () => clearInterval(promptInterval);
  }, [isOpen]);

  const handleUserFormSubmit = (info: UserInfo) => {
    setUserInfo(info);
    setShowUserForm(false);
    const welcomeMessage = {
      text: `👋 Hello ${info.fullName}! Welcome to Hashtech Info's chat support. How can I assist you today?`,
      isBot: true,
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages([welcomeMessage]);
  };

  const generateResponse = async (userMessage: string) => {
    setIsTyping(true);
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    try {
      // Create conversation history string
      const conversationHistory = messages.map(msg => 
        `${msg.isBot ? 'Assistant' : 'User'}: ${msg.text}`
      ).join('\n');

      // Add current message and format the prompt
      const fullPrompt = `${CACHED_CONTEXT}\n\nConversation history:\n${conversationHistory}\n\nUser: ${userMessage}\n\nAssistant:`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: fullPrompt }]
            }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 500,
            }
          })
        }
      );

      const data = await response.json();
      const botResponse = data.candidates[0].content.parts[0].text.trim();
      
      setMessages(prev => [...prev, {
        text: botResponse,
        isBot: true,
        timestamp: new Date().toLocaleTimeString()
      }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [...prev, {
        text: "I apologize, but I'm having trouble responding right now. Please try again later.",
        isBot: true,
        timestamp: new Date().toLocaleTimeString()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const sendToSalesTeam = async (questions: string[]) => {
    if (!userInfo || hasReachedLimit) return; // Prevent multiple API calls

    try {
      // Format the entire conversation
      const conversationHistory = messages.map(msg => 
        `${msg.isBot ? 'Assistant' : 'User'}: ${msg.text}`
      ).join('\n');

      // Create analysis prompt with full context
      const prompt = `Analyze this chat conversation between a user and our AI assistant. Create a detailed summary that includes:
1. Key points discussed
2. User's main requirements or interests
3. Level of engagement and interest shown by the user
4. Any specific products or services they asked about
5. Overall sentiment of the conversation

Chat History:
${conversationHistory}

Use basic html tags to properly format the summary. Like <h3> to <h6>, <p>, <b>, <i>, <br>, etc. Don't use markup language.
`;
      
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: prompt }]
            }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 500,
            }
          })
        }
      );

      const data = await response.json();
      const summary = data.candidates[0].content.parts[0].text.trim();  
      const final_summary = summary + "\n\nQuestions asked: \n" + questions.join(', ');

      // Send to backend only once
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/mail_Service`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
        },
        body: JSON.stringify({
          FULLNAME: userInfo.fullName,
          PHONE: userInfo.phone,
          EMAIL_client: userInfo.email,
          MESSAGE: final_summary,
          SOURCE: 'chatbot'
        }),
      });

      setHasReachedLimit(true); // Set limit reached after successful API call
      showWhatsAppMessage();

    } catch (error) {
      console.error('Error in sending to sales team:', error);
      generateResponse(inputMessage); // Continue chat if API fails
    }
  };

  const showWhatsAppMessage = () => {
    if (!userInfo) return;
    
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi,%20I%20was%20chatting%20on%20your%20website.%20My%20name%20is%20${encodeURIComponent(userInfo.fullName)}`;
    
    const botMessage = {
      text: `Thank you for your interest! To provide you with more detailed information and better assistance, let's continue our conversation on WhatsApp. <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer">Click here to chat on WhatsApp</a>`,
      isBot: true,
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, botMessage]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || !userInfo) return;

    const userMessage = {
      text: inputMessage,
      isBot: false,
      timestamp: new Date().toLocaleTimeString()
    };

    const newQuestions = [...userQuestions, inputMessage];
    setUserQuestions(newQuestions);
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // If this is the 5th message, send to sales team and show WhatsApp message
    if (newQuestions.length === 5) {
      sendToSalesTeam(newQuestions);
    }
    // If beyond 5th message, just show WhatsApp message
    else if (newQuestions.length > 5) {
      showWhatsAppMessage();
    }
    // Otherwise continue normal chat
    else {
      generateResponse(inputMessage);
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && showPrompt && (
        <div className="chat-prompt">
          Have a query? Ask me!
        </div>
      )}
      
      <div className={`chatbot ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <div className="chat-content">
            <div className="chat-header">
              <h3>Hashtech Assistant</h3>
              <button className="close-button" onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            {showUserForm ? (
              <div className="user-form-container">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const info: UserInfo = {
                    fullName: (e.target as any).fullName.value,
                    email: (e.target as any).email.value,
                    phone: (e.target as any).phone.value,
                  };
                  handleUserFormSubmit(info);
                }} className="user-form">
                  <h4>Please enter your details to start chatting</h4>
                  <input type="text" name="fullName" placeholder="Full Name" required />
                  <input type="email" name="email" placeholder="Email" required />
                  <input type="tel" name="phone" placeholder="Phone Number" required />
                  <button type="submit">Start Chat</button>
                </form>
              </div>
            ) : (
              <>
                <ChatWindow 
                  messages={messages} 
                  isTyping={isTyping} 
                  messagesEndRef={messagesEndRef}
                />

                <div className="chat-input-container">
                  {messages.length === 1 && (
                    <div className="predefined-questions">
                      <div className="questions-wrapper">
                        <p>Tell us what you want to know</p>
                        <div className="questions-grid">
                          <button className="predefined-question" onClick={() => {
                            setInputMessage("What services do you offer?");
                            handleSubmit(new Event('submit') as any);
                          }}>What services do you offer?</button>
                          <button className="predefined-question" onClick={() => {
                            setInputMessage("What is your average placement success rate?");
                            handleSubmit(new Event('submit') as any);
                          }}>What is your average placement success rate?</button>
                          <button className="predefined-question" onClick={() => {
                            setInputMessage("What is your contact number?");
                            handleSubmit(new Event('submit') as any);
                          }}>What is your contact number?</button>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="chat-input-form">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="chat-input"
                      disabled={isTyping}
                    />
                    <button type="submit" className="send-button" disabled={isTyping}>
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        )}
        
        {!isOpen && (
          <button className="chat-toggle" onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon icon={faComments} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
