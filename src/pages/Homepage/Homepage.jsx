import "./Homepage.css";

export const Homepage = () => {
  return (
    <>
      <header>
        <div className="marca">
          <img
            src="./src/assets/image/logoFundoTransparente.png"
            alt="logo"
            id="logoHeader"
          />
          <h1>Parceira de Treino</h1>
        </div>
        <button className="botaoRosa">Login</button>
      </header>
    </>
  );
};
