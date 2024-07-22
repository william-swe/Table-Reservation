import './css/App.css';
import Nav from './Nav';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import Reserve from './Reserve';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Nav />
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
            <Footer />
          </>
        } />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </Router>
  );
}

export default App;
