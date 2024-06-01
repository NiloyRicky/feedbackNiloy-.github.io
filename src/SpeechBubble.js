import React from 'react';
import './App.css';

import ReactDOM from 'react-dom';
const SpeechBubble = () => {
  return  ReactDOM.createPortal(
    <div className="speech_bubble">
    <p>Thank you for bringing the issue to us</p>  
    </div>,
    document.querySelector('.myPortal')
  );
};

export default SpeechBubble;