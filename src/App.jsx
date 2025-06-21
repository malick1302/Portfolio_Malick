import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Competences from './pages/Competences'
import Project from './pages/Project'
import Contacts from './pages/Contacts'
import EmailForm from './components/EmailForm'
import ThreeScene from './components/ThreeScene'


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Compentences" element={<Competences />} />
          <Route path="/Project" element={<Project />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path='/EmailForm' element={<EmailForm />} />
          <Route path='/ThreeScene' element={<ThreeScene />} />

        </Routes>
      
    </Router>
  )
}

export default App
