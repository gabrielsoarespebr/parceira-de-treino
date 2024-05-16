import "./MuralDePessoas.css";
import { Divider } from "../../shared/components/Divider/Divider";
import { Banner } from "./components/Banner/Banner";
import { UsuariaCard } from "./components/UsuariaCard/UsuariaCard";
import { Usuarias } from "../../data/Usuarias";
import { useEffect, useState } from "react";

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
        <ul>
          {usuariasLista.map((usuaria, id) => (
            <li key={id}>
              <UsuariaCard usuaria={usuaria} ModificarListaLocalStorage={ModificarListaLocalStorage} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
