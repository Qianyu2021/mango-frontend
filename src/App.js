
import mangologo from './image/mangologo.webp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar";
import Register from "./Page/Register";
import Recipes from "./Page/Recipes";
import Hiking from "./Page/Hiking";
import Home from "./Page/Home";
import Footer from "./Components/Footer";
import Login from "./Page/Login";
import SingleRecipe from './Page/SingleRecipe';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/hiking" element={<Hiking />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipes/:id" element={<SingleRecipe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
