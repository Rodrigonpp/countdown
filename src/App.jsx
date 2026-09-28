import "./App.css";
//components
import { Outlet } from "react-router-dom";
//assets
import NewYear from "./assets/new-year.jpg";
//context
import { CountdownContext } from "./context/CountdownContext";
import { useContext } from "react";

function App() {
  const { event } = useContext(CountdownContext);

  let eventImage = null;

  if (event) eventImage = event.image;
  return (
    <>
      <div
        className="App"
        style={
          eventImage
            ? { backgroundImage: `url(${eventImage})` }
            : { backgroundImage: `url(${NewYear})` }
        }
      >
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
