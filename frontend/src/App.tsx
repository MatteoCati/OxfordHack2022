import { Routes, Route } from "react-router-dom"

import './App.css';

import HomePage from "./HomePage"
import GraphPage from "./GraphPage"
import RolePage from "./RolePage"
import {useState} from "react";

function App() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills}/> } />
        <Route path="graph" element={ <GraphPage /> } />

        <Route path="role" element={ <RolePage/> } />
      </Routes>
    </div>
  )
}

export default App
