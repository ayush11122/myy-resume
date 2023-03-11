import './App.css';
// import Main from './Component/Main';
import Header from './Component/Header';
import Skills from './Component/Skills';
import Education from './Component/Education';
import OtherSkills from './Component/OtherSkills';
import Project from './Component/Projects';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="overall">
      {/* <Main /> */}
     <Header />
     <Skills />
     <Education />
    <OtherSkills />
    <Project />
    <Footer />

    </div>
  );
}

export default App;

