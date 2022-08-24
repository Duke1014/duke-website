import './App.css';
import Home from './Home';
import DevWork from './DevWork';
import Gallery from './Gallery';
import Music from './Music';
import Navbar from './Navbar';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/music' element={ <Music /> } />
        <Route path='/devwork' element={ <DevWork /> } />
        <Route path='/gallery' element={ <Gallery /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;