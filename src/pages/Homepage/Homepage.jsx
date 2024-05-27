import { Divider } from "../../shared/components/Divider/Divider";
import "./Homepage.css";
import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { Benefits } from "./components/Benefits/Benefits";
import { Footer } from "./components/Footer/Footer";
import { Professional } from "./components/Professional/Professional";
import { Testimonials } from "./components/Testimonials/Testimonials";
import logo from "/src/assets/image/logoBranco.png";


export const Homepage = () => {
  return (
    <>
      <header>
        <img
          src={logo}
          alt="Logotipo FitSister"
          id="logoHeader"
        />
        <button className="botaoBranco">Login</button>
      </header>
      <Banner />
      <Divider />
      <Benefits />
      <Divider />
      <About />
      <Divider />
      <Testimonials />
      <Divider />
      <Professional />
      <Divider />
      <Footer />
    </>
  );
};
