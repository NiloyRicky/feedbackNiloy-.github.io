import React, { useState } from 'react';
import { useGlobal } from './Context';

function Report({setFlag,setIsSideBar,setIsClick}) {
  const [action, setAction] = useState('');
  const [issue, setIssue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const{setIsSpeechBubble}=useGlobal();

  const handleActionChange = (e) => {
    setAction(e.target.value);
  };

  const handleIssueChange = (e) => {
    const issueText = e.target.value;
    setIssue(issueText);
    setIsButtonDisabled(issueText.length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIssue('');
    setFlag('');
    setIsSpeechBubble((prev)=>!prev)
    setIsSideBar((prev)=>!prev);
    setIsClick((prev)=>!prev)
   

    // Handle form submission logic here
    console.log('Action:', action);
    console.log('Issue:', issue);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', width: '300px', margin: '20px auto', borderRadius: '10px',backgroundColor:' antiquewhite' }}>
      
      <p>Let us know about the <span style={{fontWeight:'bold'}}>issue</span> you're facing right now</p>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Choose an section:
            <select value={action} onChange={handleActionChange} style={{ display: 'block', padding:'8px',width: '100%', marginTop: '5px' }}>
              <option value="">Interview Question </option>
              <option value="bug">Bug</option>
              <option value="feature">Feature Request</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Describe the issue in detail<span style={{color:'red',fontWeight:'bolder'}}> *</span>
            <textarea 
              value={issue} 
              onChange={handleIssueChange} 
              rows="4" 
              style={{ display: 'block', width: '100%', marginTop: '5px' }}
            />
          </label>
        </div>
        <button type="submit" disabled={isButtonDisabled} style={{ display: 'block', width: '100%', padding: '10px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Report;