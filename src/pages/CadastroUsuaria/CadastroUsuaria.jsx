import "./CadastroUsuaria.css";
import { Divider } from "../../shared/components/Divider/Divider";
import { Footer } from "./components/Footer/Footer";
import mulheresDeMaosDadas from "/src/assets/image/mulheresDeMaosDadas.jpg";

export const CadastroUsuaria = () => {
  return (
    <>
      <header>
        <img
          src="./src/assets/image/logoBranco.png"
          alt="Logotipo FitSister"
          id="logoHeader"
        />
        <a href="/" id="voltarParaHomepage">
          <i className="fa-solid fa-house"></i>
          <p>Voltar para Homepage</p>
        </a>
      </header>
      <section className="cadastroUsuaria">
        <ul id="etapaNumeroLista">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
        <div className="etapa" id="etapaZero">
          <div>
            <p>
              Pela segurança das nossas usuárias, o cadastro na nossa plataforma
              requer as seguintes etapas:
            </p>
            <div>
              <ol>
                <li>Fotos para verificação</li>
                <li>Dados pessoais</li>
                <li>Dados de login</li>
                <li>Objetivo e esportes</li>
                <li>Sua apresentação</li>
                <li>Planos (gratuito, pró ou premium)</li>
              </ol>
              <img src={mulheresDeMaosDadas} alt="Mulheres de mãos dadas" />
            </div>
          </div>
          <div className="botoesDiv">
            <a href="/" className="botao">
              Voltar
            </a>
            <button className="botao">Estou de acordo</button>
          </div>
        </div>
      </section>
      <Divider />
      <Footer />
    </>
  );
};
