import { useState } from "react";
import "./PaginaLogin.css";
import mulheresLogin from "/src/assets/image/mulhereslogin.jpg";
import { Footer } from "../Homepage/components/Footer/Footer";

export const PaginaLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log('Path to mulheres login:', mulheresLogin)

  return (
    <>
      <header>
        <img
          src="./src/assets/image/logoBranco.png"
          alt="Logotipo FitSister"
          id="logoHeader"
        />
        <a href="/">
        <p className="voltarhome">Voltar para Homepage</p> 
        </a>
      </header>
    
    <div className="containerpaglogin"> 
          <div className="container-login">
             <div className="wrap-login">
               <form className="login-form">
                 <span className="login-form-title">Bem vinda!</span>

              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input
                  className="input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
              </div>

              <a href="/redefinirsenha" className="fraseesqueceu">
                Esqueceu a senha?
              </a>

              <div className="container-login-form-botao">
                <button className="login-form-botao" >
                  <a href="/muraldesisters" className="login-form-botao-letras">Entrar</a></button>
              </div>

              <div className="criarconta">
                <span className="criarconta1">Não possui conta?</span>
                <a href="/cadastrousuaria" className="criarconta2">Se cadastre</a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
