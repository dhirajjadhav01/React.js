import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OfferHere from './Components/OfferHere';
import CourseHere from './Components/CourseHere';
import First from './Components/First';



function App() {
  return (
 <>
 <First />
 <Router>
  <Routes>
    <Route path='/' element={<CourseHere />} />
    <Route path='/off' element={<OfferHere />} />
    <Route path='/cou' element={<CourseHere />} />
  </Routes>
 </Router>
 </>
  )
}

export default App
