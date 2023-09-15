import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Plans from '../Components/Pages/Plans/Plans'
import Courses from '../Components/Pages/Courses/Courses'
import AboutUs from '../Components/AboutUs/AboutUs'
import ContactUs from '../Components/Pages/ContactUs/ContactUs'
import SupportUs from '../Components/Pages/SupportUs/SupportUs'

function LayoutRoutes() {
  return (
   
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/education-app' element={<Home/>}/>
            <Route path='/Services' element={<Plans/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/supportus' element={<SupportUs/>}/>

        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes
