import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage/Homepage";
import { MuralDePessoas } from "./pages/MuralDePessoas/MuralDePessoas";
import { MuralDeProfissionais } from "./pages/MuralDeProfissionais/MuralDeProfissionais";
import { Chat } from "./pages/Chat/Chat";
import { CadastroUsuaria } from "./pages/CadastroUsuaria/CadastroUsuaria";
import { TermosDeUso } from "./pages/TermosDeUso/TermosDeUso";
import { PoliticaDePrivacidade } from "./pages/PoliticaDePrivacidade/PoliticaDePrivacidade";
import { PaginaLogin } from "./pages/PaginaLogin/PaginaLogin";
import { RedefinirSenha } from "./pages/RedefinirSenha/RedefinirSenha";
import { VisaoPerfil } from "./pages/VisaoPerfil/VisaoPerfil";
import EditarPerfil from "./pages/EditarPerfil/EditarPerfil";
import { CadastroProfissional } from "./pages/CadastroProfissional/CadastroProfissional";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/inicio" element={<Homepage />} />
        <Route path="/muraldesisters" element={<MuralDePessoas />} />
        <Route
          path="/muraldeprofissionais"
          element={<MuralDeProfissionais />}
        />
        <Route path="/cadastrousuaria" element={<CadastroUsuaria />} />
        <Route path="/cadastroprofissional" element={<CadastroProfissional />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/termosdeuso" element={<TermosDeUso />} />
        <Route
          path="/politicadeprivacidade"
          element={<PoliticaDePrivacidade />}
        />
        <Route path="/redefinirsenha" element={<RedefinirSenha />} />
        <Route path="/visaoperfil" element={<VisaoPerfil />} />
        <Route path="/editarperfil" element={<EditarPerfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
