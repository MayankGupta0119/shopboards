import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CartItem from "./components/CartItem";
import { Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
