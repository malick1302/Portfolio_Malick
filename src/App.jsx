import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Competences from './pages/Competences'
import Project from './pages/Project'
import Contacts from './pages/Contacts'
import EmailForm from './components/EmailForm'

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

        </Routes>
      
    </Router>
  )
}

export default App
