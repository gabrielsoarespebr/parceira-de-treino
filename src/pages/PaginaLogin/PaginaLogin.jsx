
import { useState } from "react";
import "./PaginaLogin.css";
import mulheresLogin from "/src/assets/image/mulhereslogin.jpg";


function PaginaLogin(){

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
      </header>
    
    <div className="container"> 
       <img src={mulheresLogin} alt="mulheresexercitando" title="mulheres exerciando" id="imagemmulher"></img>

          <div className="container-login">
             <div className="wrap-login">
               <form className="login-form">
                 <span className="login-form-title">Bem vinda!</span>

                  <div className="wrap-input">
                    <input className={email !== "" ? 'has-val input' : 'input'}
                     type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value) } />
                
                <span className="focus-input" data-placeholder="email">Email</span>
              </div>

              <div className="wrap-input">
                <input className="input" type="password" 
                value={password}
                onChange={e => setPassword(e.target.value) } />
                <span className="focus-input" data-placeholder="password">Senha</span>
              </div>

              <a href="" className="esqueci">Esqueceu a senha?</a>

              <div className="container-login-form-botao">
                <button className="login-form-botao">Entrar</button>
              </div>

              <div className="criarconta">
                <span className="criarconta1">Não possui conta?</span>
                <a href="" className="criarconta2">Se cadastre</a>
              </div>
            </form>

         

          </div>
        </div>
        </div>
        </>
    );
  };

  export default PaginaLogin