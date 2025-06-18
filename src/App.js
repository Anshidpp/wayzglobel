import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
