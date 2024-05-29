import "./Banner.css";
import duplaParceiras3 from "/src/assets/image/duplaParceiras3.jpg";

export const Banner = () => {
  return (
    <div id="bannerMuralDePessoas">
      <div>
        <p className="fonteTitulo textoMaiusculo">Juntas somos</p>
        <p className="fonteTitulo textoMaiusculo">Mais fortes!</p>
      </div>
      <img
        src={duplaParceiras3}
        alt="Parceiras de treino sorrindo enquanto treinam"
      />
    </div>
  );
};
