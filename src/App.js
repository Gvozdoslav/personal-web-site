import React from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <header>
          <h1>Rostislav Remizov's site</h1>
          <nav>
            <a href="#about">About Me</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
          </nav>
        </header>
        <main className="site-sections">
          <About/>
          <Experience />
          <Education />
          <Skills />
        </main>
        <Footer />
      </div>
  );
}

export default App;
