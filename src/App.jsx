import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation'
import Header from './components/header'
import Footer from './components/footer'
import Project from './components/project'

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Project />
      <Footer />
    </div>
  );
}

export default App
