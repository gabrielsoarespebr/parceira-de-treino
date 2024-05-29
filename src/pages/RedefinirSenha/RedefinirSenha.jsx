import { useState } from "react";
import "./RedefinirSenha.css";
import { Footer } from "../Homepage/components/Footer/Footer";
import Fundo from "/src/assets/image/fundoTexturaRoxo.png";
import CadeadoIcone from "/src/assets/image/iconecadeado.png";

export const RedefinirSenha = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      console.log("Senha redefinida com sucesso:", newPassword);
    } else {
      console.log("As senhas não coincidem");
    }
  };

  return (
    <>
      <header>
        <img
          src="./src/assets/image/logoBranco.png"
          alt="Logotipo FitSister"
          id="logoHeader"
        />
        <a href="/home" className="voltar">
          Voltar para a Homepage
        </a>
      </header>

      <div className="containerpagredefinir">
        <div className="container-redefinir">
          <div className="wrap-redefinir">
            <form className="redefinir-form" onSubmit={handleSubmit}>
              <span className="redefinir-form-title-icone">
                <img src={CadeadoIcone} alt="Cadeado lock" />
              </span>
              <span className="redefinir-form-title">Esqueceu sua senha?</span>
              <p>Insira uma nova senha para acessar novamente sua conta.</p>

              <div className="wrap-input">
                <input
                  className={newPassword !== "" ? "has-val input" : "input"}
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Digite a nova senha"
                />
                <span className="focus-input"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={confirmPassword !== "" ? "has-val input" : "input"}
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirme a nova senha"
                />
                <span className="focus-input"></span>
              </div>

              <div className="container-redefinir-form-botao">
                <button className="redefinir-form-botao">
                  <a href="/login" className="letradobotaoalterar">Alterar</a></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
