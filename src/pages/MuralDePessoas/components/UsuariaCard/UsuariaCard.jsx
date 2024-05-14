import "./UsuariaCard.css";

import iconeFechar from "/src/assets/icons/iconeFechar.png";
import iconeChat from "/src/assets/icons/iconeChat.png";
import iconeInfo from "/src/assets/icons/iconeInfo.png";

export const UsuariaCard = () => {
  return (
    <div className="usuariaCard">
      <div>
        <img src={iconeFechar} alt="ícone de fechar" className="iconeFechar" />
        <div className="acoesUsuariaCard">
          <div className="iconeDistancia">
            <i className="fa-solid fa-location-dot"></i>
            <p>10 km</p>
          </div>
          <div>
            <img src={iconeChat} alt="ícone de chat" className="iconeChat" />
            <img
              src={iconeInfo}
              alt="ícone de informação"
              className="iconeInfo"
            />
          </div>
        </div>
        <img
          src="./src/assets/image/usuarias/parceira1Brenda.png"
          alt="Foto de usuária"
        />
      </div>
      <div>
        <div>
          <p>Brenda</p>
          <p>,&nbsp;</p>
          <p>25</p>
        </div>
        <div className="objetivoDiv">
          <p>Objetivo</p>
          <p>Objetivo</p>
        </div>
        <div className="esportesDiv">
          <p>Esportes</p>
          <ul>
            <li>Esporte 1</li>
            <li>Esporte 2</li>
            <li>Esporte 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
