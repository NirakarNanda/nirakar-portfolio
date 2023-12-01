import React from 'react'
import './App.css'
import Home from './components/home/home'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume/Resume'
import Blog from './components/Blog/Blog'

function App() {

  return (
    <main className="main">
        <Home />
        <Projects />
        <Skills />
        <Portfolio />
        <Resume />
        <Blog />
    </main>
  )
}

export default App
