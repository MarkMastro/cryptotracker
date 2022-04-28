import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import ADA from './Pages/ADA';
import ETH from './Pages/ETH';
import BTC from './Pages/BTC';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/btc" element={<BTC/>}/>
        <Route path="/eth" element={<ETH/>}/>
        <Route path="/ada" element={<ADA/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
