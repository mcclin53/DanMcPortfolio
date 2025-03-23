import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation'
import Header from './components/header'
import Footer from './components/footer'
import Project from './components/project'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App
