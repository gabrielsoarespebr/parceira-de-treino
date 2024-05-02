import "./Professional.css";
import profissionais1 from "/src/assets/image/profissionais1.png";

export const Professional = () => {
  return (
    <section className="paddingPadrao centralizarElementos fundoRosa corBranco">
      <h2 className="fonteTitulo marginBottomTitulo textoMaiusculo tituloSection">
        Área profissional
      </h2>

      <img src={profissionais1} alt="Profissionais" id="profissionais" />

      <div id="textoAreaProfissional">
        <p>
          Você é uma <span>mulher nutricionista, personal trainer, fisioterapeuta ou
          instrutora de pilates</span> apaixonada por ajudar outras mulheres a alcançarem
          sua melhor versão?
        </p>
        <p>Então, a Parceira de Treino é o lugar ideal para você!</p>
        <p>Nossa plataforma conecta profissionais como você com uma comunidade ativa em busca de orientação para alcançar objetivos de saúde e bem-estar.</p>
        <p>Ao se juntar a nós, você terá a oportunidade de <span>ampliar seu público-alvo e crescer profissionalmente</span>!</p>
      </div>
      <button className="botaoBranco">Divulgar meu trabalho</button>
    </section>
  );
};
