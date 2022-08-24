import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
export default App;