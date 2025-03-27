import { createContext, useState } from 'react'
import Heading from './Heading'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './Pages/Log In/Login'
import Chatbot from "./Pages/Home/Chatbot"
import LandingPage from './Pages/Landing Page/LandingPage'
import HealthTrack from './Pages/HealthTrack/HealthTrack'
import AIDiagnostic from './Pages/Ai Diagnostics/AiDiagnostic'
import Signup from './Pages/Sign Up/SignUp'
import Profile from './Pages/Profile/Profile'
import './App.css'
export const LoginContext = createContext();
export const userContext = createContext();



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    phoneNumber: "",
  });


  return (<BrowserRouter>
      <userContext.Provider value = {{formData, setFormData}}>
      <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}> 
      <NavBar/>
      <Chatbot/>
      <Routes>
          <Route path = "/" element = {<LandingPage/>}></Route>
          <Route path= "/aidiagnostics" element = {<AIDiagnostic/>}></Route>
          <Route path='/healthtracking' element = {<HealthTrack/>}></Route>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path='/signup' element = {<Signup/>}></Route>
          <Route path='/profile' element = {<Profile/>}></Route>
      </Routes>
      </LoginContext.Provider>
      </userContext.Provider>
  </BrowserRouter>
)
}

export default App
