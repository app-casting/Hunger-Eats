
import "./App.css";
import Home from "./Pages/Home.jsx"
import Footer from "./Components/Footer"
import {Routes, Route} from "react-router-dom"
import Login from "./Pages/Login";
import Items from "./Components/Items";
function App() {

  return (
    
    < >
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/items" element={<Items/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  );
}

export default App;
