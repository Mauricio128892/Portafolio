// src/App.jsx
import React from 'react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs';

import Footer from './components/Footer';

function App() {
  return (

    <div className="min-h-screen bg-sea-blue relative overflow-hidden">
   
      <div className="absolute inset-0 bg-waves-pattern bg-repeat opacity-10 z-0"></div>

     
      <Header />

   
      <main className="relative z-10">
        <HeroSection /> 
        <AboutMe />   
        <Projects />    
        <Blogs />       
        <Contact />     
      </main>


      <Footer />
    </div>
  );
}

export default App;
