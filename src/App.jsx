import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Formula1 from './pages/Formula1';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Formula1" element={<Formula1/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
          
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;
