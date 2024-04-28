import "./Homepage.css";
import { Banner } from "./components/Banner/Banner";

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
      <Banner></Banner>
    </>
  );
};
