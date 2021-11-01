import "./App.css";
import { SocketContext, socket } from "./context/Socket";
import Ticker from "./components/Ticker";
import Header from "./components/Header";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div className="body d-md-flex">
        <div className="header-container container col-md-5">
          <Header />
        </div>
        <Ticker />
      </div>
    </SocketContext.Provider>
  );
}

export default App;
