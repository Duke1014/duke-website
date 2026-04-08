// import Home from './Home';

// export default function App() {
//   return (
//     <div>
//       <div className='background'></div>
//       <Home />
//     </div>
//   )
// }

// Bootstrap grid only — install with: npm install bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

import Navbar    from './components/Navbar/Navbar';
import Hero      from './components/Hero/Hero';
import About     from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact   from './components/Contact/Contact';
import Footer    from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
