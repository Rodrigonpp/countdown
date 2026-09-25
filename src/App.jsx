import "./App.css";
//components
import { Outlet } from "react-router-dom";
//assets
import NewYear from "./assets/new-year.jpg";
//hooks

function App() {
  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
