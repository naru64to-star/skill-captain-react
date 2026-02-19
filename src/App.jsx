 import {useState } from "react";
 export default function App(){
    const[name,setName]= useState("");
    const[email,setEmail]=useState("");

    const handleDone=(e)=>{
        e.preventDefault();
        console.log(name);
        console.log(email);

        setName("");
        setEmail("");
    }

    return(
    <>
<h1>Signup form</h1>
<form onSubmit={handleDone}>
    <label>Name:</label>
    <input 
    type="text" placeholder="enter your name" value={name}
    onChange={(e)=>setName(e.target.value)}
    required></input>

    <br></br>
<br></br>    
    <label>Email:</label>
    <input 
    type="email"  placeholder="enter your email" value={email}
    onChange={(e)=>setEmail(e.target.value)}
    required></input>
    <br></br>
    <br></br>
    <button type="submit">Submit</button>

    </form>   
        </>
    )
}

    
   


