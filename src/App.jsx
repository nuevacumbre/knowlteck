import { Route, Routes } from "react-router";
import About from "./components/About";
import Cart from "./components/Cart";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="max-w-screen-xl m-auto mb-20">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

/*import React from 'react'

export const App = () => {
  return (
    <div><h1 className='text-6xl font-bold'>hola</h1>
            <h2 className='text-giant font-bold'>chico nuko</h2>
    </div>
  )
}

export default  App*/