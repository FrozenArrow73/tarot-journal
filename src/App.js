import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./screens/Home"
import Login from "./screens/Login"
import Register from "./screens/Register"
import Decks from "./screens/Decks"
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route element ={<PrivateRoutes/>}>
          <Route path='/decks' element={<Decks/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
