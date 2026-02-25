import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact  from "./Components/Contact";


export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}