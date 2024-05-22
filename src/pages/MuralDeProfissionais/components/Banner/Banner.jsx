import "./Banner.css";

export const Banner = () => {
  return (
    <div id="bannerMuralDePessoas">
      <div>
        <p className="fonteTitulo textoMaiusculo">Conte com</p>
        <p className="fonteTitulo textoMaiusculo">As melhores!</p>
      </div>
      <img
        src="./src/assets/image/profissionais2.jpg"
        alt="Profissionais sorrindo"
      />
    </div>
  );
};
