import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 bg-orange-600/20 rounded-full blur-3xl -bottom-20 -right-20"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 flex-1">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
