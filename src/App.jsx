import React, { Suspense, lazy } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About';
import Achievements from './Components/Achievements/Achievements'
import Education from './Components/Education/Education'
import Contacts from './Components/Contacts/Contacts'
import Projects from './Components/Projects/Projects'

function App() {
  return (
    <div className='bg-gradient-to-br from-[#0a0a1f] via-[#0f172a] to-[#0b1020]'>
      <NavBar />
      <Home />
      <About/>
      <Achievements />
      <Projects/>
      <Education/>
      <Contacts/>
    </div>
  );
}
export default App;