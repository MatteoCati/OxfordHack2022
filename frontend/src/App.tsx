import {Routes, Route, Link} from "react-router-dom"
import HomePage from "./HomePage"
import GraphPage from "./GraphPage"
import RolePage from "./RolePage"
import { useState } from "react";

import "./App.css"
import { AppBar } from "@mui/material";
import config from "./config";
import { Page } from "./common";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function App() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState<Page>(0)

  return (
    <div className="App">

      <AppBar position="absolute" sx={{ backgroundColor: "transparent", boxShadow: "none", top: "0", }}>
        <Link
          color="inherit"
          to={currentPage == 1 ? "/" : "/graph"}
          style={{ textDecoration: "none", display:  currentPage == 0 ? "none" : undefined}}
        >
          <ArrowBackIosIcon sx={{ color: config.COLORS.PRIMARY, margin: "1rem", width: "2rem", height: "2rem" }} />
        </Link>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} setCurrentPage={setCurrentPage} />} />
        <Route path="/graph" element={<GraphPage setCurrentPage={setCurrentPage} selectedSkills={selectedSkills} />} />
        <Route path="/role/:roleId" element={<RolePage selectedSkills={selectedSkills} setCurrentPage={setCurrentPage} />} />
      </Routes>
    </div>
  )
}

export default App
