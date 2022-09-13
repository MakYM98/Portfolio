import './App.css';
import "./styles/nav.css"
import About from './components/about.js'
import Home from './components/home.js'
import Project from './components/projects.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route,NavLink}from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <li><NavLink to='/' style={styles.homeLinkStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
            <li><NavLink to='/about' style={styles.navLinkStyle}>About</NavLink></li>
            <li><NavLink to='/project' style={styles.navLinkStyle}>Projects</NavLink></li>
          </nav>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
        </Routes>
        
      </Router>
      
    </div>
    
  );
}

const styles={
  homeLinkStyle: {
    textDecoration:'none',
    color: '#4E4E50',
  },

  navLinkStyle: {
    textDecoration:'none',
    color: '#4E4E50',
    marginLeft: '30px',
  }

}

export default App;
