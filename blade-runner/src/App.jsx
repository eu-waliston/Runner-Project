import React from "react";
import AllRouters from "./routes/AllRoutes";
import NavBar from "./components/Navbar/Navbar"
const App = () => {
  return (
    <div className="App-component">
      < NavBar />
      <AllRouters />
    </div>
  )
}

export default App;

