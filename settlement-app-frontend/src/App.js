import "./App.css";
import { PartyA } from "./Components/PartyA/PartyA";
import { PartyB } from "./Components/PartyB/PartyB";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/party-a" element={<PartyA />} />
      <Route path="/party-b" element={<PartyB />} />
    </Routes>
  );
}

export default App;
