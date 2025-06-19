import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import ServicesPage from "./components/service/service"
import TestimonialsPage from "./components/Testimonials/Testimonials"
import ContactSection from './components/contact/contact';
import Footer from './components/footer/footer';
function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <ServicesPage/>
      <TestimonialsPage/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
