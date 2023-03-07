import { BrowserRoute as Router, Route, Routes } from "react-router-dom";
import './App.css';
import ButtonSubmit from "./ButtonSubmit";
import InputUser from "./components/InputUser";
import ListItem from "./components/ListItem";
import NavBar from './components/NavBar';

function App() {
  return (
    
      <div className="App" >
        <NavBar />
        <InputUser name ="User Name" type="text" icon="fa fa-user text-white mr-3 " firstChild="mt-[65%] sm:mt-[50%] sm:mt-[25vh] input-user"/>
        <InputUser name ="Password" type="password" icon="fa-solid fa-unlock text-white mr-3" />
        <ButtonSubmit />
        <ul className="flex absolute sm:w-[25rem] sm:mt-44 sm:ml-5 mt-24 bottom-3 ">
          <ListItem name="About Us" link="#" classname =" ml-6 pl-2 pr-2"/>
          <ListItem name="Privacy Policy" link="#" classname =" mx-5 pl-2 pr-2"/>
          <ListItem name="Terms Of Use" link="#" classname =" pl-2 pr-2"/> 
        </ul>
        
        {/* sm:mt-44 sm:ml-5 mt-24 */}
      </div>
    
    
    
    
  );
}

export default App;
