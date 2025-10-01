import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Formula1 from './pages/Formula1';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Adboard from './components/Adboard';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app-layout">
      <Router>
        {/* Header at the top */}
        <Header />

        {/* Navbar on the left */}
        <Navbar />

        {/* Main content in the middle */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Formula1" element={<Formula1 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Adboard on the right */}
        <Adboard />

        {/* Optional footer (spans full width under everything) */}
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
