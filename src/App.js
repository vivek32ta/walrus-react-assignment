import "./App.css";
import { SocketContext, socket } from "./context/Socket";
import Home from "./components/Home";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Home />
    </SocketContext.Provider>
  );
}

export default App;
