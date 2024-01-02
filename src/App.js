import React from 'react'
import { BrowserRouter as Router,Routes, Route, Switch, } from 'react-router-dom';
import Home from './Screens/home';
import Details from './Components/Details';
import Header from './Components/Header'
// import doctor from '../src/Assets/doctor.png'
export default function App() {
  return (
  <Routes>
   
      <Route path="/" element={<Home/>}/>
      <Route path="/Details" element={<Details/>}/>
   
  </Routes>
 
  )
}
