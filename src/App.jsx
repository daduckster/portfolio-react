import React from 'react';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Tech from './components/Tech/Tech';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tech />
      <Projects />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
