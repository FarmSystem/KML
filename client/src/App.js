import { BrowserRouter, Routes, Route } from "react-router-dom";
import HOME from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HOME />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
