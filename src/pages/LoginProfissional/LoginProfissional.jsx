
import { useState } from "react";
import "./LoginProfissional.css";
import { Footer } from "../Homepage/components/Footer/Footer";
import FundoPagProf from "/src/assets/image/profissionaislogin2.jpg";


function LoginProfissional(){

  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

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
    
    <div className="containerpagloginprofissional"> 
          <div className="container-loginprofissional">
             <div className="wrap-loginprofissional">
               <form className="login-form-profissional">
                 <span className="login-form-title-profissional">Bem vinda, profissional! </span>

                  <div className="wrap-input-profissional">
                    <input className={email !== "" ? 'has-val input' : 'input'}
                     type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value) } />
                <span className="focus-input-profissional" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input-profissional">
              <input className={password !== "" ? 'has-val input' : 'input'}
                     type="senha"
                onChange={e => setPassword(e.target.value) } />
                <span className="focus-input-profissional" data-placeholder="Senha"></span>
              </div>

            
                <a href="/redefinirsenha" className="fraseesqueceuprofissional">Esqueceu a senha?</a>
            
            
              <div className="container-login-form-botao-profissional">
                <button className="login-form-botao-profissional" >
                  <a href="/muraldesisters" className="login-form-botao-letras-profissional">Entrar</a></button>
              </div>

              <div className="criarcontaprofissional">
                <span className="criarconta1profissional">Não possui conta?</span>
                <a href="/cadastrousuaria" className="criarconta2profissional">Se cadastre</a>
              </div>
            </form>
           </div>
          </div>
        </div>

  
        <Footer/>      
        </>
    );
  };

  export default LoginProfissional