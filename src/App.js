import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
// import NavBar  from './components/NavBar';
import "./components/Navbar/NavBar.css";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
      <div className="content">
          <Routes>
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Home" element={<HomePage />} />
          </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
