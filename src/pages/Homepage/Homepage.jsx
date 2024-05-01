import "./Homepage.css";
import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { Benefits } from "./components/Benefits/Benefits";
import { Testimonials } from "./components/Testimonials/Testimonials";

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
      <Banner/>
      <Benefits/>
      <About/>
      <Testimonials/>
    </>
  );
};
