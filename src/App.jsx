import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage/Homepage";
import { MuralDePessoas } from "./pages/MuralDePessoas/MuralDePessoas";
import { Chat } from "./pages/Chat/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/inicio" element={<Homepage />} />
        <Route path="/muraldepessoas" element={<MuralDePessoas />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
