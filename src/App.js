// import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import Social from "./components/Social"
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects"
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Social />
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
