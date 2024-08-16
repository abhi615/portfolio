import NavBar from './Components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Project';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Banner } from './Components/Banner';


function App() {
  return (
  
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    
  );
}

export default App;
