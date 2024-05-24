import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage/Homepage";
import { Chat } from "./pages/Chat/Chat";
import { VisaoPerfil } from "./pages/VisaoPerfil/VisaoPerfil";
import { EditarPerfil } from "./pages/EditarPerfil/EditarPerfil";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/inicio" element={<Homepage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/visaoperfil" element={<VisaoPerfil />} />
        <Route path="/editarperfil" element={<EditarPerfil />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
