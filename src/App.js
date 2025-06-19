import Home from './Home';
// import DevWork from './DevWork';
// import Gallery from './Gallery';
// import Music from './Music';
// import Navbar from './Navbar';
// import Contact from './Contact';
// import Banner from './Banner';
// import Games from './Games';
// import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    // <BrowserRouter> 
    <div>
      {/* <Banner /> */}
      <div className='background'></div>
      {/* <Navbar /> */}
      <Home />
    </div>
      // <Routes>
      //   <Route path='/' element={ <Home /> } />
      //   <Route path='/music' element={ <Music /> } />
      //   <Route path='/devwork' element={ <DevWork /> } />
      //   <Route path='/gallery' element={ <Gallery /> } />
      //   <Route path='/contact' element={ <Contact /> } />
      //   <Route path='/games' element={ <Games /> } />
      // </Routes>
    // </BrowserRouter>
  );
}
export default App;