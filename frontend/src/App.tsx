import { Routes, Route } from "react-router-dom"
import './App.css';


import HomePage from "./HomePage"
import GraphPage from "./GraphPage"
import RolePage from "./RolePage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="graph" element={ <GraphPage/> } />
        <Route path="role" element={ <RolePage/> } />
      </Routes>
    </div>
  )
}

export default App
