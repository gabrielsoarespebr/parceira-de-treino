import "./MuralDeProfissionais.css";
import { Divider } from "../../shared/components/Divider/Divider";
import { Banner } from "./components/Banner/Banner";
import { ProfissionalCard } from "./components/ProfissionalCard/ProfissionalCard";
import { Profissionais } from "../../data/Profissionais";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer/Footer";

export const MuralDeProfissionais = () => {
  const [profissionaisLista, setProfissionaisLista] = useState(Profissionais);

  // FILTRO POR PROFISSÃO - começo
  const [filtroProfissao, setFiltroProfissao] = useState(0);

  useEffect(() => {
    let profissionaisListaAtualizada = [];

    if (filtroProfissao > 0) {
      profissionaisListaAtualizada = Profissionais.filter(
        (profissional) => profissional.profissao === filtroProfissao
      );
      setProfissionaisLista(profissionaisListaAtualizada);
    } else setProfissionaisLista(Profissionais);
  }, [filtroProfissao]);

  const FiltrarPorProfissao = (event) => {
    setFiltroProfissao(Number(event.target.value));
  };
  // FILTRO POR PROFISSÃO - fim

  return (
    <>
      <header>
        <img
          src="/assets/image/logoBranco.png"
          alt="Logotipo FitSister"
          id="logoHeader"
        />
        <nav>
          <ul className="barraDeNavegacao">
            <li>
              <a href="">
                <i className="fa-solid fa-circle-user"></i>
                <p>Meu perfil</p>
              </a>
            </li>
            <li>
              <a href="/chat">
                <i className="fa-solid fa-comments"></i>
                <p>Chat</p>
              </a>
            </li>
            <li>
              <a href="/muraldesisters">
                <i className="fa-solid fa-user-group"></i>
                <p>Sisters</p>
              </a>
            </li>
            <li>
              <a href="/home">
                <i className="fa-solid fa-right-to-bracket"></i>
                <p>Sair</p>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Banner />
      <Divider />
      <section id="muralDeProfissionais">
        <div id="filtroProfissao">
          <div>
            <p>Filtrar por</p>
            <select
              name="profissionalFiltroProfissao"
              id="profissionalFiltroProfissao"
              onChange={FiltrarPorProfissao}
            >
              <option value="0">(Escolha a profissão)</option>
              <option value="1">Personal trainer</option>
              <option value="2">Nutricionista</option>
              <option value="3">Fisioterapeuta</option>
              <option value="4">Treinadora de corrida</option>
              <option value="5">Instrutora de Pilates</option>
            </select>
          </div>
        </div>
        <ul>
          {profissionaisLista.map((profissional) => (
            <li key={profissional.id}>
              <ProfissionalCard profissional={profissional} />
            </li>
          ))}
        </ul>
      </section>
      <Divider />
      <Footer />
    </>
  );
};
