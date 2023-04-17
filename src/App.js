import './App.css';
import data from './data'
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Stocks from './pages/Stocks';

function App() {
  return (
    <div className="App">
      <Nav />
  <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/dashboard" element={<Dashboard stocksArray={data}/> }/>
      <Route path="/stocks/:symbol" element={<Stocks stocksArray={data}/>}/>
  </Routes>
    </div>
  );
}

export default App;
