import React,{useState} from "react";
import SideBar from "./SideBar";
import { useGlobal } from "./Context";

import SpeechBubble from "./SpeechBubble";
const ToggleBtn=()=>{
    const[isFlat,setIsFlat]=useState(false)
    const[isClick,setIsClick]=useState(false)
    const[isSideBar,setIsSideBar]=useState(false);
    const{isSpeechBubble}=useGlobal()
    const toggle=()=>{
        setIsClick((prev)=>!prev)
        setIsSideBar((prev)=>!prev)
    }
    return(
        <div className="toggle">
            {isSideBar?<SideBar setIsFlat={setIsFlat} setIsSideBar={setIsSideBar} setIsClick={setIsClick}/>:''}
{isClick ?<i class="fa-regular fa-circle-xmark" onClick={toggle}></i>:<i class="fa-regular fa-note-sticky" onClick={toggle}></i>}

{isSpeechBubble?<SpeechBubble/>:''}
        </div>
    )


}
export default ToggleBtn