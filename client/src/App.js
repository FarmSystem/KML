import { BrowserRouter, Routes, Route } from "react-router-dom";
import HOME from "./pages/home/Home";
import Cheer from "./pages/cheer/Cheer";
import Map from "./pages/map/Map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/cheer" element={<Cheer />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
