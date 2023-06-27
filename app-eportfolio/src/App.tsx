import './App.css'
import React from 'react'
import Profil from './components/Profil/Profil'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <div className='header-wrapper' >
        <Header />
      </div>
      <div className='profil-wrapper' >
        <Profil />
      </div>
      <div className='skills-wrapper' >
        <Skills />
      </div>
      <div className='contact-wrapper' >
        <Contact />
      </div>
      <div className='main-image-footer-wrapper'>
        <img className='image-footer-js' src='https://static.vecteezy.com/system/resources/previews/002/406/573/non_2x/web-development-at-office-concept-illustration-of-people-characters-in-flat-design-vector.jpg' alt='img'></img>
        <img className='image-footer-teamwork' src='https://i.pinimg.com/736x/f2/6a/ab/f26aab0a230d4322cc208dba5663128f.jpg' alt='img'></img>
        <img className='image-footer-teamflow' src='https://static.vecteezy.com/system/resources/previews/002/406/578/non_2x/digital-marketing-and-teamwork-at-office-concept-illustration-of-people-characters-in-flat-design-vector.jpg' alt='img'></img>
      </div>
      <div className='footer-wrapper' >
        <Footer />
      </div>
    </div>
  )
}

export default App

