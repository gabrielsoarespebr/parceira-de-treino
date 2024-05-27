import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage/Homepage";
import { MuralDePessoas } from "./pages/MuralDePessoas/MuralDePessoas";
import { MuralDeProfissionais } from "./pages/MuralDeProfissionais/MuralDeProfissionais";
import { Chat } from "./pages/Chat/Chat";
import VisaoPerfil from "./pages/VisaoPerfil/VisaoPerfil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/inicio" element={<Homepage />} />
        <Route path="/muraldesisters" element={<MuralDePessoas />} />
        <Route path="/muraldeprofissionais" element={<MuralDeProfissionais />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/visaoperfil" element={<VisaoPerfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
