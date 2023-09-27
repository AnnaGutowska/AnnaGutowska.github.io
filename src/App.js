import Navbar from './components/Navbar/Navbar';

import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Experience  from './components/Experience/Experience';
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div >
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
    </div>
    
  );
}

export default App;
