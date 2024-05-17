import "./MuralDePessoas.css";
import { Divider } from "../../shared/components/Divider/Divider";
import { Banner } from "./components/Banner/Banner";
import { UsuariaCard } from "./components/UsuariaCard/UsuariaCard";
import { Usuarias } from "../../data/Usuarias";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer/Footer";

export const MuralDePessoas = () => {
  const [usuariasLista, setUsuariasLista] = useState([]);

  localStorage.setItem("usuariasLista", JSON.stringify(Usuarias));

  let lista = JSON.parse(localStorage.getItem("usuariasLista"));

  useEffect(() => {
    AtualizarListaLocalStorage();
  }, []);

  const AtualizarListaLocalStorage = () => {
    setUsuariasLista(JSON.parse(localStorage.getItem("usuariasLista")));
  };

  const ModificarListaLocalStorage = (id) => {
    lista = JSON.parse(localStorage.getItem("usuariasLista"));

    const indexUsuariaOcultar = id - 1;

    lista.splice(indexUsuariaOcultar, 1);

    localStorage.setItem("usuariasLista", JSON.stringify(lista));

    AtualizarListaLocalStorage();
  };

  return (
    <>
      <header>
        <img
          src="./src/assets/image/logoBranco.png"
          alt="Logotipo FitSister"
          id="logoHeader"
        />
        <nav>
          <ul className="barraDeNavegacao">
            <li>
              <i className="fa-solid fa-circle-user"></i>
              <a href="">Meu perfil</a>
            </li>
            <li>
              <i className="fa-solid fa-comments"></i>
              <a href="">Chat</a>
            </li>
            <li>
              <span className="material-icons">sports</span>
              <a href="">Profissionais</a>
            </li>
            <li>
              <i className="fa-solid fa-right-to-bracket"></i>
              <a href="">Sair</a>
            </li>
          </ul>
        </nav>
      </header>
      <Banner />
      <Divider />
      <section id="muralDePessoas">
        <div id="filtroEOrdem">
          <div>
            <p>Filtrar por</p>
            <select name="usuariaFiltroObjetivo" id="usuariaFiltroObjetivo">
              <option value="">(Escolha o objetivo)</option>
              <option value="1">Ganhar músculo</option>
              <option value="2">Perder peso</option>
              <option value="3">Vida Saudável</option>
              <option value="4">Projeto Verão</option>
              <option value="5">Competir</option>
            </select>

            <select name="usuariaFiltroEsporte" id="usuariaFiltroEsporte">
              <option value="">(Escolha o esporte)</option>
              <option value="1">Musculação</option>
              <option value="2">Crossfit</option>
              <option value="3">Corrida</option>
              <option value="4">Caminhada</option>
              <option value="5">Ciclismo</option>
              <option value="6">Natação</option>
              <option value="7">Futebol de campo</option>
              <option value="8">Futsal</option>
              <option value="9">Vôlei</option>
              <option value="10">Basquete</option>
              <option value="11">Handebol</option>
              <option value="12">Boxe</option>
              <option value="13">Jiu-jitsu</option>
              <option value="14">Muay thai</option>
              <option value="15">Taekwondo</option>
              <option value="16">Fisiculturimo</option>
              <option value="17">Tênis</option>
              <option value="18">Tênis de mesa</option>
              <option value="19">Tênis de praia</option>
              <option value="20">Vôlei de praia</option>
              <option value="21">Slackline</option>
              <option value="22">Surf</option>
              <option value="23">Yoga</option>
              <option value="24">Pilates</option>
              <option value="25">Hidroginástica</option>
            </select>
          </div>
          <div>
            <p>Ordenar por</p>
            <select name="usuariaFiltroObjetivo" id="usuariaFiltroObjetivo">
              <option value="">(Escolha a ordem)</option>
              <option value="1">Distância (mais perto)</option>
              <option value="2">Distância (mais longe)</option>
              <option value="3">Idade (mais jovem)</option>
              <option value="4">Idade (mais velha)</option>
            </select>
          </div>
        </div>
        <ul>
          {usuariasLista.map((usuaria, id) => (
            <li key={id}>
              <UsuariaCard
                usuaria={usuaria}
                ModificarListaLocalStorage={ModificarListaLocalStorage}
              />
            </li>
          ))}
        </ul>
      </section>
      <Divider />
      <Footer />
    </>
  );
};
