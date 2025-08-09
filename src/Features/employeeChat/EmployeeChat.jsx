import React, { useState, useRef, useEffect } from 'react';

export default function EmployeeChat () {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Current chat participant
  const currentChat = {
    name: 'Ali Essam',
    department: 'Inventory',
    status: 'Online now',
    avatar: 'AE',
    avatarColor: 'bg-danger'
  };

  // Initial messages
  const initialMessages = [
    {
      id: 1,
      sender: 'other',
      text: "I've received the shipment",
      timestamp: '2:45 PM',
      status: 'Read',
      date: '12/4/2025'
    },
    {
      id: 2,
      sender: 'other',
      text: "You're money has been sent to your account.",
      timestamp: '2:46 PM',
      status: 'Read'
    },
    {
      id: 3,
      sender: 'me',
      text: "Yeah, Received them.",
      timestamp: '3:10 PM',
      status: 'sent'
    },
    {
      id: 4,
      sender: 'me',
      text: "Glad doing business with you.",
      timestamp: '3:10 PM',
      status: 'sent'
    },
    {
      id: 5,
      sender: 'other',
      text: "We might need another one in a few months",
      timestamp: '3:12 PM',
      status: 'Read',
      isToday: true
    },
    {
      id: 6,
      sender: 'other',
      text: "Hey, The shipment is yet to arrive?",
      timestamp: '5:10 PM',
      status: 'Read'
    },
    {
      id: 7,
      sender: 'me',
      text: "You have yet to send the money...",
      timestamp: '5:43 PM',
      status: 'sent'
    },
    {
      id: 8,
      sender: 'other',
      text: "And you have yet to send the Products...",
      timestamp: '5:45 PM',
      status: 'Sent'
    },
    {
      id: 9,
      sender: 'other',
      text: "Send first.",
      timestamp: '5:45 PM',
      status: 'Sent'
    }
  ];

  useEffect(() => {
    setMessages(initialMessages);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'me',
        text: messageInput,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent'
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
      
      // Simulate response after 2 seconds
      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          sender: 'other',
          text: "Got it, thanks for the update!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'Read'
        };
        setMessages(prev => [...prev, response]);
      }, 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessageStatus = (status) => {
    return status === 'Read' ? 'Read' : 'Sent';
  };

  return (
    <div className='row position-relative'>
      <div className="card h-100">
        {/* Chat Header */}
        <div className="card-header border-bottom d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <button className="btn btn-link text-muted p-0 me-3">
              <i className="fas fa-arrow-left" style={{ fontSize: '18px' }}></i>
            </button>
            <div className="d-flex align-items-center">
              <div className={`rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-3 ${currentChat.avatarColor}`}
                  style={{ width: '45px', height: '45px' }}>
                {currentChat.avatar}
              </div>
              <div>
                <h6 className="mb-0 fw-semibold">{currentChat.name}</h6>
                <div className="d-flex align-items-center">
                  <small className="text-primary me-2">{currentChat.department}</small>
                  <span className="mx-1">•</span>
                  <small className="text-success">{currentChat.status}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-light">
              <i className="fas fa-phone me-2"></i>Call
            </button>
            <button className="btn btn-outline-secondary">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        {/* Messages Container */}
        <div className="card-body p-0 d-flex flex-column">
          <div className="flex-grow-1 overflow-auto px-4 py-3">
            
            {messages.map((message, index) => {
              const showDateDivider = message.date && (!messages[index - 1] || messages[index - 1].date !== message.date);
              const showTodayDivider = message.isToday && (!messages[index - 1] || !messages[index - 1].isToday);
              
              return (
                <React.Fragment key={message.id}>
                  {showDateDivider && (
                    <div className="text-center my-3">
                      <span className="badge bg-light text-muted px-3 py-1">{message.date}</span>
                    </div>
                  )}
                  {showTodayDivider && (
                    <div className="text-center my-3">
                      <span className="badge bg-light text-muted px-3 py-1">Today</span>
                    </div>
                  )}
                  
                  <div className={`d-flex mb-3 ${message.sender === 'me' ? 'justify-content-end' : 'justify-content-start'}`}>
                    {message.sender === 'other' && (
                      <div className={`rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-2 flex-shrink-0 ${currentChat.avatarColor}`}
                          style={{ width: '35px', height: '35px', fontSize: '12px' }}>
                        {currentChat.avatar}
                      </div>
                    )}
                    
                    <div className={`position-relative ${message.sender === 'me' ? 'ms-5' : 'me-5'}`}>
                      <div className={`p-3 rounded-3 ${
                        message.sender === 'me' 
                          ? 'bg-primary text-white' 
                          : 'bg-light text-dark'
                      }`}
                      style={{ 
                        maxWidth: '300px',
                        borderBottomRightRadius: message.sender === 'me' ? '8px !important' : '',
                        borderBottomLeftRadius: message.sender === 'other' ? '8px !important' : ''
                      }}>
                        <p className="mb-0">{message.text}</p>
                      </div>
                      
                      <div className={`d-flex align-items-center mt-1 ${message.sender === 'me' ? 'justify-content-end' : 'justify-content-start'}`}>
                        <small className="text-muted me-2">{formatMessageStatus(message.status)}</small>
                        <small className="text-muted">{message.timestamp}</small>
                        {message.sender === 'other' && (
                          <div className={`rounded-circle ms-2 ${currentChat.avatarColor}`}
                              style={{ width: '20px', height: '20px' }}>
                            <img 
                              src="https://via.placeholder.com/20/28a745/ffffff?text=✓" 
                              alt="avatar" 
                              className="rounded-circle w-100 h-100"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    {message.sender === 'me' && (
                      <div className={`rounded-circle d-flex align-items-center justify-content-center text-white fw-bold ms-2 flex-shrink-0 bg-success`}
                          style={{ width: '35px', height: '35px', fontSize: '12px' }}>
                        ME
                      </div>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
          {/* Message Input */}
          <div className="border-top p-3">
            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '40px', height: '40px' }}>
                <i className="fas fa-smile"></i>
              </button>
              <button className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '40px', height: '40px' }}>
                <i className="fas fa-paperclip"></i>
              </button>
              <div className="flex-grow-1">
                <input
                  type="text"
                  className="form-control border-0 bg-light rounded-pill ps-3"
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  style={{ height: '40px' }}
                />
              </div>
              <button 
                className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px' }}
                onClick={handleSendMessage}
                disabled={!messageInput.trim()}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </div>
  );
};
