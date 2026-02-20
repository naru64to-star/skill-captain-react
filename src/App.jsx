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
<h1 className="head">Signup form</h1>
<form onSubmit={handleDone}>
    <label className="label">Name:</label>
    <input className="label2"
    type="text" placeholder="enter your name" value={name}
    onChange={(e)=>setName(e.target.value)}
    required></input>

    <br></br>
<br></br>    
    <label className="label">Email:</label>
    <input className="label2"
    type="email"  placeholder="enter your email" value={email}
    onChange={(e)=>setEmail(e.target.value)}
    required></input>
    <br></br>
    <br></br>
    <button className="btn" type="submit">Submit</button>

    </form>   
        </>
    )
}

    
   


