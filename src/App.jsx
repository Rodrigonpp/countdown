import "./App.css";
//components
import Counter from "./components/Counter";
import Title from "./components/Title";
//assets
import NewYear from "./assets/new-year.jpg"
//hooks
import useCountdown from "./hooks/useCountdown";

function App() {
  const x = useCountdown("Jan 1, 2027 00:00:00")
  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
        <div className="container">
          <Title title={"Contagem regressiva para 2027"} />
          <div className="countdown-container">
            <Counter title={"Dias"} number={2} />
            <Counter title={"Horas"} number={2} />
            <Counter title={"Minutos"} number={2} />
            <Counter title={"Segundos"} number={2} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
