import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import {ButtonGreen, ButtonGreen2} from "./components/ButtonGreen";
import About from "./pages/About";

import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Loading from "./components/Loading";
import OverlayMenu from "./components/OverlayMenu";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <div className="md:flex">
      <ButtonGreen/>
      <div className="h-screen w-full p-3 md:px-0 overflow-hidden">
        <Navbar />
        {isOpen ? (<OverlayMenu />) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
          </Routes>
        )}
        <Footer />
      </div>
      <ButtonGreen2 handleOpen={() => setIsOpen(!isOpen)}>
        {isOpen ? <AiOutlineClose className='text-3xl' /> : <RiMenu4Fill className='text-3xl'/>}
      </ButtonGreen2>
    </div>
  );
}

export default App;
