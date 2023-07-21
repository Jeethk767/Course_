
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './Signin'
import Signup from './Signup'
import Appbar from './Appbar'
import Addcourses from './Addcourses';

function App() {
  

  return (
    <div>
      
    <div style={{
      height:"100vh",
      widht:"100vw",
      backgroundColor:"#eeeeee"
    }}>
      <Router>
            <Routes>
                <Route path="/" element={<Signup/>} />
                <Route path="/login" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                {/* {/* <Route path="/about" element={<CreateCourse />} /> */}
                <Route path="/addcourses" element={<Addcourses />} /> 
                
            </Routes>
        </Router>
     </div>
    </div>
  )
}

export default App
