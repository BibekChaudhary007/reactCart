import Header from "./component/Header";
import Home from "./component/Home";
import "./styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Cart from "./component/Cart";
function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
  <Toaster/>
  </BrowserRouter>;
}

export default App;
