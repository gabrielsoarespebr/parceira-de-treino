import { Footer } from "../Homepage/components/Footer/Footer";

export function VisaoPerfil(){
    return(
        <><header>     
        <img
          src="./src/assets/image/logoBranco.png"
          alt="Logotipo FitSister"
          id="logoHeader"
        />
        <button className="botaoBranco">Login</button>
      </header>
      <p>Estou aprendendo react</p>
      <Footer/> 
      </>

    )
}