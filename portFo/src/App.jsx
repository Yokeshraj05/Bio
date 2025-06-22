import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Projects';
import Resume from './pages/Resume';
import Header from './components/Header';

const App = () => {
  return (
    <>
    <Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/project" element={<Project />} />
  <Route path="/resume" element={<Resume />} />
</Routes>
</>
  );
};

export default App;
