import "./Banner.css";
import profissionais2 from "/src/assets/image/profissionais2.jpg";

export const Banner = () => {
  return (
    <div id="bannerMuralDePessoas">
      <div>
        <p className="fonteTitulo textoMaiusculo">Conte com</p>
        <p className="fonteTitulo textoMaiusculo">As melhores!</p>
      </div>
      <img
        src={profissionais2}
        alt="Profissionais sorrindo"
      />
    </div>
  );
};
