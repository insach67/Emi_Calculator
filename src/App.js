import Fastemi from "./component/Fastemi";
import "./App.css";
import Form from "./component/Form";
import Showtable from "./component/Showtable";
import History from "./component/History";

function App() {
  return (
    <div className="App">
      <h1 className="emitext">EMI CALCULATOR</h1>
      <div className="box">
        <Form />
        <div className="below">
          <Fastemi />
        </div>
        <Showtable />
      </div>
      <History />
    </div>
  );
}

export default App;
