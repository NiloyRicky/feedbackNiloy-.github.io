import React,{useState} from "react";
import ReactDOM from 'react-dom';
import Contact from "./Contact";
import Report from "./Report";
import SpeechBubble from "./SpeechBubble";
import Feedback from "./Feedback";
import Suggestion from "./Suggestion";
const Modal=({flag,setFlag,setIsSideBar,setIsClick})=>{
    
return ReactDOM.createPortal(<><div className="modal">
{flag=='report'?<Report flag={flag} setIsSideBar={setIsSideBar} setFlag={setFlag}setIsClick={setIsClick}/>:
flag=='contact'?<Contact flag={flag} setFlag={setFlag}  setIsSideBar={setIsSideBar}setIsClick={setIsClick}/>:
flag=='feedback'?<Feedback  flag={flag} setFlag={setFlag}  setIsSideBar={setIsSideBar}setIsClick={setIsClick}/>: 
flag=='suggestion'?<Suggestion  flag={flag} setFlag={setFlag}  setIsSideBar={setIsSideBar}setIsClick={setIsClick}/>:''}

</div>

</>,
document.querySelector('.myPortal')
)

}
export default Modal;