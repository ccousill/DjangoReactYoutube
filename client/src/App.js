import "./App.css";
import "./css/navbar.css";
import Home from "./components/Home";
import Navbar from "./components/UI/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Top50Page from "./pages/Top50Page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route path="/top50" element={<Top50Page/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
