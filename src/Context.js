import React,{useContext, useEffect, useState} from "react";
const create=React.createContext();
const Context=({children})=>{
    
    const[isSpeechBubble,setIsSpeechBubble]=useState(false);
    
    useEffect(()=>{
        if(isSpeechBubble){
            const timer=
                setTimeout(()=>{setIsSpeechBubble(false)},3000)
            
            return()=>clearTimeout(timer);
        }
        
    },[isSpeechBubble])//
return(<>
<create.Provider value={{isSpeechBubble,setIsSpeechBubble}}>{children}</create.Provider>
</>)
}
const useGlobal=()=>useContext(create);
export default Context;
export {useGlobal}
