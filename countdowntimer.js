 import React, { useState } from 'react'
const Countdowntimer =()=>{
     const [data,setdata]=useState(0)
    
    const handelclick=()=>{
       
        const k=document.getElementById('raj')
        let val=k.value 
        setInterval(() => {
            if(val!==0){
            setdata(val=val-1);
            }
            
        }, 1000);  
        
    }
    return(
       
       
        <div >
             
         <center>
         <lable>Enter The Time: </lable>
            <input id='raj'/>
             <button onClick={handelclick}>enter</button><br/> 
               {data}
         </center>
            
        </div>
    
        
    )
}
export default Countdowntimer;