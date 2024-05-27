import "./Banner.css";

export const Banner = () => {
  return (
    <div id="bannerMuralDePessoas">
      <div>
        <p className="fonteTitulo textoMaiusculo">Juntas somos</p>
        <p className="fonteTitulo textoMaiusculo">Mais fortes!</p>
      </div>
      <img
        src="./src/assets/image/duplaParceiras3.jpg"
        alt="Parceiras de treino sorrindo enquanto treinam"
      />
    </div>
  );
};
