import "./MuralDePessoas.css";
import { Divider } from "../../shared/components/Divider/Divider";
import { Banner } from "./components/Banner/Banner";
import { UsuariaCard } from "./components/UsuariaCard/UsuariaCard";
import { Usuarias } from "../../data/Usuarias";

export const MuralDePessoas = () => {
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
          {Usuarias.map((usuaria, id) => (
            <li key={id}>
              <UsuariaCard
                usuaria={usuaria}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
