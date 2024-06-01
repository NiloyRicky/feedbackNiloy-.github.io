import React, { useState } from 'react';
import { useGlobal } from './Context';

const Feedback = ({setFlag,setIsSideBar,setIsClick}) => {
  const [feedback, setFeedback] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const{setIsSpeechBubble}=useGlobal();

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleAnonymousChange = (event) => {
    setIsAnonymous(event.target.checked);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSpeechBubble((prev)=>!prev)
    setIsSideBar((prev)=>!prev);
    setFlag('');
    setIsClick((prev)=>!prev)
   
  };

  return (
    <div className='dialog'>
      <p>Let us know your <span style={{fontWeight:"bold"}}>Feedback</span> about us!</p>
      <hr style={{color:'gray', borderBottom:'1 px solid black'}}/>
      <div className='textareaContainer'>
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Give feedback (50 words)"
          rows="4"
          className='textarea'
        />
        <button className='attachButton'>
          Attach
        </button>
      </div>
      <div className='checkboxContainer'>
        <input
          type="checkbox"
          checked={isAnonymous}
          onChange={handleAnonymousChange}
          id="anonymousCheckbox"
        />
        <label htmlFor="anonymousCheckbox">Give feedback anonymously</label>
      </div>
      <button 
        onClick={handleSubmit} 
        className='submitButton'
        disabled={!isAnonymous}
      >
        Submit
      </button>
    </div>
  );
};

const styles = {

};

export default Feedback;