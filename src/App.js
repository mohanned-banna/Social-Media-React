import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import NavBar  from './components/NavBar';
import "./components/NavBar.css";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Router>
      <div className="App" >
      <NavBar />
      <div className="content">
          <Routes>
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/Contact" element={<ContactPage src=""/>} />
          </Routes>
      </div>
        
      </div>
    </Router>
    
    
    
    
  );
}

export default App;
