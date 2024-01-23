import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
// import About from './components/about/About';
import Skills from './components/skills/Skills';
// import Services from './components/services/Services';
import Qualifications from './components/qualifications/Qualifications';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Project from './components/project/Project';


const DefaultLayout = ({ children }) => (
  <>
    <Header />
    <main className='main'>
      {children}
    </main>
    <Footer />
    <ScrollUp />
  </>
);

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element = {
          <DefaultLayout>
            <Home />
            <Skills />
            {/* <Services /> */}
            <Qualifications />
            <Portfolio />
            <Contact />
          </DefaultLayout>
        }
      />
      <Route path='/project/:itemId'
        element={
          <DefaultLayout>
            <Project />
          </DefaultLayout>
        }
      />
    </Routes>
  );
}

export default App;