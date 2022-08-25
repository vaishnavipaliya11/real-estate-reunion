import './App.css';
import { Home } from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import { Wishlist } from './Pages/Wishlist';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/wishlist" element = {<Wishlist/>}/>
      </Routes>
    </div>
  );
}

export default App;
