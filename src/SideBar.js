import React,{useState} from "react";
import ReactDOM from 'react-dom';
import Modal from "./Modal";
const SideBar=({setIsFlat,setIsSideBar,setIsClick})=>{
    const[flag,setFlag]=useState('')
    
return ReactDOM.createPortal(<>
<div className={flag!=''?'icons_flat':'icons'} onClick={()=>setIsFlat(true)}>
    <div className="report"  onClick={()=>setFlag('report')}>
        <p className={flag!=''?'p_flat':''}>Report Issue</p><span className={flag!=''?'span_flat':''}><i class="fa-solid fa-flag" ></i></span>
    </div>

    <div className="feedback" onClick={()=>setFlag('feedback')}>
        <p className={flag!=''?'p_flat':''}>Share feedback</p><span className={flag!=''?'span_flat':''}><i class="fa-regular fa-comment" ></i></span>
    </div>

    <div className="suggestion"  onClick={()=>setFlag('suggestion')}>
        <p className={flag!=''?'p_flat':''}>Give Suggestion</p><span className={flag!=''?'span_flat':''}><i class="fa-solid fa-file-pen"></i></span>
    </div>
    <div className="contact" onClick={()=>setFlag('contact')}>
        <p className={flag!=''?'p_flat':''}>Contact Us</p><span className={flag!=''?'span_flat':''}><i class="fa-solid fa-address-book" ></i></span>
    </div>
</div>
{flag.length!==0?<Modal flag={flag} setFlag={setFlag} setIsSideBar={setIsSideBar} setIsClick={setIsClick}/>:''}
</>,
document.querySelector('.myPortal'));

}
export default SideBar