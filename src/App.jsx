 import { useEffect, useState } from "react";
 export default function App(){
    const[show, setShow] = useState(false);
    return(
    
        <>
        <h1>day 5</h1>
   <button onClick={()=>setShow(!show)}>Click increas me</button>
   
   {show &&(
        <>
        <p> thanks for click me</p>
        <h1>welcome here</h1>
        </>
    )
   }

   <h3>welcome my website</h3>
   
        
        </>
    )
}

    
   


