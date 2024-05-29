import "./Banner.css";
import duplaParceiras1 from "/src/assets/image/duplaParceiras1.jpg";

export const Banner = () => {
  return (
    <div id="banner">
      <div>
        <p className="fonteTitulo textoMaiusculo">Nunca foi tão fácil</p>
        <p className="fonteTitulo textoMaiusculo">Encontrar uma</p>
        <p className="fonteTitulo textoMaiusculo">Parceira de treino</p>
        <a href="/cadastrousuaria" className="botaoRoxo">Cadastre-se agora</a>
      </div>
      <img
        src={duplaParceiras1}
        alt="Parceiras de treino sorrindo, olhando para um celular"
      />
    </div>
  );
};
