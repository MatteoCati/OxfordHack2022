import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import GraphPage from "./GraphPage"
import RolePage from "./RolePage"
import {useState} from "react";

import "./App.css"
import {AppBar, Link, Toolbar} from "@mui/material";
import config from "./config";


function App() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["JavaScript", "Python", "Java", "TypeScript"])
  return (
    <div className="App">
        <AppBar position="static" sx={{backgroundColor: config.COLORS.PRIMARY,}}>
            <Toolbar variant="dense" sx={{height: "70px", display: "flex", alignContent: "center"}}>
                <Link variant="h3" color="inherit" href={"/"} sx={{textDecoration: "none"}}>
                    Careers
                </Link>
            </Toolbar>
        </AppBar>
      <Routes>
        <Route path="/" element={ <HomePage selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills}/> } />
        <Route path="/graph" element={ <GraphPage /> } />
        <Route path= "/role/:roleId" element={ <RolePage selectedSkills={selectedSkills}/> } />
      </Routes>
    </div>
  )
}

export default App
