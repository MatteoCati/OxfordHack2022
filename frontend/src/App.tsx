import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import GraphPage from "./GraphPage"
import RolePage from "./RolePage"
import {useState} from "react";

import "./App.css"
import {AppBar, Link, Toolbar} from "@mui/material";
import config from "./config";
import { Page } from "./common";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function App() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["JavaScript", "Python", "Java", "TypeScript"])
  const [currentPage, setCurrentPage] = useState<Page>(0)
  
  return (
    <div className="App">
        <AppBar position="sticky" sx={{backgroundColor: "transparent", boxShadow: "none"}}>
            <Link 
              variant="h3" 
              color="inherit" 
              href={currentPage == 1 ? "/" : "/graph" } 
              sx={{textDecoration: "none"}}
              display={currentPage == 0 ? "none" : undefined}
            >
                <ArrowBackIosIcon sx={{color: config.COLORS.PRIMARY, margin: "1rem", width: "2rem", height: "2rem"}}/>
            </Link>
        </AppBar>
      <Routes>
        <Route path="/" element={ <HomePage selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} setCurrentPage={setCurrentPage}/> } />
        <Route path="/graph" element={ <GraphPage setCurrentPage={setCurrentPage}/> } />
        <Route path= "/role/:roleId" element={ <RolePage selectedSkills={selectedSkills} setCurrentPage={setCurrentPage}/> } />
      </Routes>
    </div>
  )
}

export default App
