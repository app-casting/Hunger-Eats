
import "./App.css";
import Home from "./Pages/Home.jsx"
import Footer from "./Components/Footer"
import {Routes, Route} from "react-router-dom"
import Login from "./Pages/Login";
function App() {

  return (
    
    < >
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/footer" element={<Footer/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  );
}

export default App;
