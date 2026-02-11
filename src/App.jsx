 import { useState } from "react";
 export default function App(){
     const[count,setCount]=useState(0);
    
    return(
        <>
 <h1>Count{count}</h1>
   <button onClick={()=>setCount(count=>count+1)}>Click increas me</button>
   <br></br>
   <button onClick={()=>setCount(0)}>Reset me</button>
   <button onClick={()=>setCount(count=>count-1)}>reverse</button>
        
        </>
    )
}

    
   


