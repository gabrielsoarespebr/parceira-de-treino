
import { useState } from "react";
import "./PaginaLogin.css";

function PaginaLogin(){

  const[email, setEmail] = useState("")
  const[Password, setPassword] = useState("")

    return (

    //  <header>
    //   <img
    //     src="./src/assets/image/logoBranco.png"
    //     alt="Logotipo FitSister"
    //     id="logoHeader"
    //   />
    // </header>

      <div className="container">
       <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">

              <span className="login-form-title">Bem vinda!</span>

              <div className="wrap-input">
                <input className={email !== "" ? 'has-val input' : 'input'}
                 type="Email"
                 value={email}
                 onChange={e => setEmail(e.target.value) } />
                <span className="focus-input" data-placeholder="Email">Email</span>
              </div>

              <div className="wrap-input">
                <input className="input" type="Password" 
                value={Password}
                onChange={e => setPassword(e.target.value) } />
                <span className="focus-input" data-placeholder="Password">Senha</span>
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
    )
  }

  export default PaginaLogin