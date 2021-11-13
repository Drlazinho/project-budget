import React from 'react'
import {Router} from '@reach/router'
import Home from './components/pages/home/Home'
import Company from './components/pages/company/Company'
import Contact from './components/pages/contact/Contact'
import NewProject from './components/pages/newproject/NewProject'
import Projects from './components/pages/projects/Projects'
import Container from './components/layout/container/Container'
import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'

export default function App() {
  return (
      <>
        <Navbar/>
        <Container>
          <Router>
              <Home exact path="/"/>
              <Company exact path="/company"/>
              <Contact exact path="/contact"/>
              <NewProject exact path="/newproject"/>
              <Projects exact path="/projects"/>
          </Router>
        </Container>
          <Footer/>
      </>
  )
}

