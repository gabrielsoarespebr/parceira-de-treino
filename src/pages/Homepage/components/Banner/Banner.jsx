import "./Banner.css";

export const Banner = () => {
  return (
    <div id="banner">
      <div>
        <p className="fonteTitulo textoMaiusculo">Nunca foi tão fácil</p>
        <p className="fonteTitulo textoMaiusculo">Encontrar uma</p>
        <p className="fonteTitulo textoMaiusculo">Parceira de treino</p>
        <button className="fonteBotao textoMaiusculo botaoVerde">Cadastre-se agora</button>
      </div>
      <img
        src="./src/assets/image/duplaParceiras1.jpg"
        alt="Parceiras de treino sorrindo, olhando para um celular"
      />
    </div>
  );
};
