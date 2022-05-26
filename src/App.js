import Cart from "./Components/ProductCard/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/pages/Home";
import NavBar from "./Components/navbar/NavBar";
import ToastForm from "./Components/ToastForm/ToastForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/productCart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/toast" element={<ToastForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
