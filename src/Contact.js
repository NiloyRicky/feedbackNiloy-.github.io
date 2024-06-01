import React, { useState } from 'react';
import './App.css'
import { useGlobal } from './Context';

const Contact= ({setFlag,setIsSideBar,setIsClick}) => {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const {setIsSpeechBubble}=useGlobal();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuestionChange = (e) => {
    const value = e.target.value;
    setQuestion(value);
    setIsSubmitDisabled(value.trim().split('').length < 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick((prev)=>!prev)
    if (!isSubmitDisabled) {
      // Handle form submission
      setFlag('')
      console.log('Form submitted', { name, question });
    }
    setIsSpeechBubble((prev)=>!prev)
    setIsSideBar((prev)=>!prev);
    
  };

  return (
    <div className="contact-dialog">
      <p>Get in <span style={{fontWeight:"bold"}}>Contact with us</span> for your queries!</p>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:<span style={{color:'red',fontWeight:'bolder'}}>*</span></label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={handleNameChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="question">What would you ask? :<span style={{color:'red',fontWeight:'bolder'}}>*</span></label>
          <textarea 
            id="question" 
            value={question} 
            onChange={handleQuestionChange} 
            required 
          />
        </div>
        <button className='btn' type="submit" disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;