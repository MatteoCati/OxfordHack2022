import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>This is the home page</h1>
        <Link to="graph">Click to go to the graph page</Link>
      </div>
    );
  }
  
  export default Home;