import "./App.css";
import { SocketContext, socket } from "./context/Socket";
import Ticker from "./components/Ticker";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <h3 className="text-center">Kryptomania</h3>
      <div className="body">
        <Ticker />
      </div>
    </SocketContext.Provider>
  );
}

export default App;
