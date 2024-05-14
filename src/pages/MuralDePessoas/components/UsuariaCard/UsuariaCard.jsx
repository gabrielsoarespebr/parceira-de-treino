import "./UsuariaCard.css";

export const UsuariaCard = () => {
  return (
    <div className="usuariaCard">
      <div>
        <span className="material-icons iconeFechar">cancel</span>
        <div className="acoesUsuariaCard">
          <div className="iconeDistancia">
            <i className="fa-solid fa-location-dot"></i>
            <p>10 km</p>
          </div>
          <div>
            <div className="iconeChat">
              <i className="fa-solid fa-comment"></i>
            </div>
            <span className="material-icons iconeInfo">info</span>
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
