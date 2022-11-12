import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import GraphPage from "./GraphPage"
import RolePage from "./RolePage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="graph" element={ <GraphPage/> } />
        <Route path="role" element={ <RolePage/> } />
      </Routes>
    </div>
  )
}

export default App