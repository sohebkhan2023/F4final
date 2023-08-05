import React from "react"
import './App.css';
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";
import { Routes,Route  } from "react-router-dom";


const App  =()=>{


  return(
    
    <Routes>
    <Route path="/" element={<HomePage/>}   />
     <Route path="/detail/:id" element={<DetailPage/>}  />
    </Routes>
    
  )
}

export default App