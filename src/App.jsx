import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navigation/Navbar';
import Footer from './Navigation/Footer';
import Home from './Pages/Home/Home';
import Daycare from './components/Daycare/Daycare';
import LearningAdvancement from './components/LearningAdvancement/LearningAdvancement';
import AfterSchool from './components/AfterSchool/AfterSchool';
import EventsWebinar from './components/EventsWebinar/EventsWebinar';
import Corporates from './components/Corporates/Corporates';
import FoundationalDevelopment from './components/FoundationalDevelopment/FoundationalDevelopment';
import NurseryAdmission from './components/NurseryAdmission/NurseryAdmission';
import Safety from './components/Safety/Safety';
import ParentThing from './components/ParentThing/ParentThing';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daycare" element={<Daycare />} />
        <Route path="/learning-advancement" element={<LearningAdvancement />} />
        <Route path="/afterschool" element={<AfterSchool />} />
        <Route path="/events-webinar" element={<EventsWebinar />} />
        <Route path="/corporates" element={<Corporates />} />
        <Route path="/foundational-development" element={<FoundationalDevelopment />} />
        <Route path="/fee-structure" element={<NurseryAdmission />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/parent-thing" element={<ParentThing />} />
      </Routes>
      <Footer />
    </Router>
  );
}
