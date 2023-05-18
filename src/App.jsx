import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Members from './pages/members';
import Register from './pages/register';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/members" element={<Members />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
