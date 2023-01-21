import { BrowserRouter, Routes, Route } from "react-router-dom";
import HOME from "./pages/home/Home";
import Cheer from "./pages/cheer/Cheer";
import Map from "./pages/map/Map";
import Message from "./pages/message/Message";
import Parade from "./pages/parade/Parade";
import ParadeMessage from "./pages/parade_message/Parade_message";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/cheer" element={<Cheer />} />
        <Route path="/map" element={<Map />} />
        <Route path="/message" element={<Message />} />
        <Route path="/parade" element={<Parade />} />
        <Route path="/parade/:paradeId" element={<ParadeMessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
