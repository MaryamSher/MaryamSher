import './App.css';
import Home from './PortfolioContainer/Home/Home'
import AboutMe from './PortfolioContainer/AboutMe/AboutMe'
import Resume from './PortfolioContainer/Resume/Resume'
import ContactMe from './PortfolioContainer/ContactMe/ContactMe'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer/>
      <Home />
      <AboutMe />
      <Resume />
      <ContactMe/>
    </>
  );
}

export default App;
