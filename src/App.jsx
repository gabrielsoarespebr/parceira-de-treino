import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Chat } from "./pages/Chat/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/inicio" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
