import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Compliance from './pages/Compliance';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';

import {} from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/compliance' element={<Compliance />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
