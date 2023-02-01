import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage/HomePage"
import GraphPage from "./GraphPage/GraphPage"
import RolePage from "./RolePage/RolePage"
import {useState} from "react";

import "./App.css"
import {AppBar, Link, Toolbar} from "@mui/material";
import config from "./config";
import { Page } from "./common";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function App() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState<Page>(0)
  
  return (
    <div className="App">

        <AppBar className="app-bar">
            <Link 
              href={currentPage == 1 ? "/" : "/graph" }
              display={currentPage == 0 ? "none" : undefined}
            >
                <ArrowBackIosIcon sx={{color: config.COLORS.PRIMARY}} className="back-arrow"/>
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
