import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./screens/Home"
import Login from "./screens/Login"
import Register from "./screens/Register"
import Decks from "./screens/Decks"
import PrivateRoutes from './utils/PrivateRoutes';
import Cards from './screens/Cards';
import AddDeck from './screens/AddDeck';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route element ={<PrivateRoutes/>}>
          <Route path='/decks' element={<Decks/>}/>
          <Route path='/decks/cards/:id' element={<Cards/>}/>
          <Route path="/decks/addDeck" element={<AddDeck/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
