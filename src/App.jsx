import React from 'react'
import Navbar from './Navigation/Navbar'
import Footer from './Navigation/Footer'
import Home from './Pages/Home/Home'
import Daycare from './components/Daycare/Daycare'
import LearningAdvancement from './components/LearningAdvancement/LearningAdvancement'
import AfterSchool from './components/AfterSchool/AfterSchool'
import EventsWebinar from './components/EventsWebinar/EventsWebinar'
import Corporates from './components/Corporates/Corporates'
import FoundationalDevelopment from './components/FoundationalDevelopment/FoundationalDevelopment'
import NurseryAdmission from './components/NurseryAdmission/NurseryAdmission'
import Safety from './components/Safety/Safety'
import ParentThing from './components/ParentThing/ParentThing'

export default function App() {
  const path = window.location.pathname;

  return (
    <div>
      <Navbar />
      {path === '/daycare' ? <Daycare /> : 
       path === '/learning-advancement' ? <LearningAdvancement /> :
       path === '/afterschool' ? <AfterSchool /> :
       path === '/events-webinar' ? <EventsWebinar /> :
       path === '/corporates' ? <Corporates /> :
       path === '/foundational-development' ? <FoundationalDevelopment /> :
       path === '/fee-structure' ? <NurseryAdmission /> :
       path === '/safety' ? <Safety /> :
       path === '/parent-thing' ? <ParentThing /> :
       <Home />}
      <Footer />
    </div>
  )
}