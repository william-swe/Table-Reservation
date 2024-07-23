import './css/App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Reserve from './components/Reserve';
import Form from './components/Form';
import Alert from "./components/Alert";
import { AlertProvider } from "./context/alertContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AlertProvider>
      <Router>
        <Alert />
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
          {/* Booking Form components: */}
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </AlertProvider>
  );
}

export default App;
