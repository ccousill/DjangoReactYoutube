import './App.css';
import './css/navbar.css'
import Home from './components/Home'
import Navbar from './components/UI/Navbar';
function App() {
  return (
    <div className="wrapper">
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;
