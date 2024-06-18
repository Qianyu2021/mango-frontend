
import mangologo from './image/mangologo.webp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar";
import Register from "./Page/Register";
import Recipes from "./Page/Recipes";
import Home from "./Page/Home";
import Footer from "./Components/Footer";
import Login from "./Page/Login";
import SinglePost from './Page/SinglePost';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Write from "./Page/Write"; 
//import multer from "multer";


function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <div class="app-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
  
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipes/:id" element={<SinglePost />} />
          <Route path="/hiking/:id" element={<SinglePost />} />
          <Route path="/write" element={<Write />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
