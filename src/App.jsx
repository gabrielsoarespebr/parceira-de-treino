import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import { Homepage } from "./pages/Homepage/Homepage";
import { Chat } from "./pages/Chat/Chat";
import PaginaLogin from "./pages/PaginaLogin/PaginaLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/inicio" element={<Homepage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<PaginaLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
