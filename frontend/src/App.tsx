import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import GraphPage from "./GraphPage"
import RolePage from "./RolePage"
import {useState} from "react";

import "./App.css"

function App() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["JavaScript", "Python", "Java", "TypeScript"])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills}/> } />
        <Route path="/graph" element={ <GraphPage /> } />
        <Route path= "/role/:roleId" element={ <RolePage selectedSkills={selectedSkills}/> } />
      </Routes>
    </div>
  )
}

export default App
