 import { useEffect, useState } from "react";
 export default function App(){
    
    const fruits=["Apple","Mango","Banana","orange","pine-Apple","Grapes"]

    const btn=[1,2,3,4,5,6,">>"]

    return(
    
        <>
        <h1>day 6</h1>

   <ul>
{fruits.map((item,index)=>(
<li key={index}>{item}</li>
))}
   </ul>
   {btn.map((item,index)=>(
    <button key={index}>{item}</button>))}
        </>
    )
}

    
   


