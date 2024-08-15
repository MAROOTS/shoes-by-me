
import './App.css'

import NavBar from "./components/NavBar.jsx";
import {Outlet} from "react-router-dom";

function App() {


  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default App
