import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import './index.css'
import HeroSection from './components/home/HeroSection'
import ExperienceSection from './components/home/ExperienceSection'
import Services from './components/home/Services'
import PurposeGoals from './components/home/PurposeGoals'
import StatsCounter from './components/home/StatsCounter'
import TestimonialSlider from './components/home/TestimonialSlider'
import LatestNews from './components/home/LatestNews'
import Footer from './components/Footer'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <Services />
      <PurposeGoals />
      <StatsCounter />
      <TestimonialSlider />
      <LatestNews />
      <Footer />
      <Routes>

      </Routes>
    </BrowserRouter>

  )
}

export default App
