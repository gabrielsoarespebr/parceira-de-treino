import "./Testimonials.css";

import parceira12Manu from "/src/assets/image/parceira12Manu.png";
import parceira2Jessica from "/src/assets/image/parceira2Jessica.png";
import parceira8Sandra from "/src/assets/image/parceira8Sandra.png";
import parceira5Camila from "/src/assets/image/parceira5Camila.png";
import iconeEstrela from "/src/assets/icons/iconeEstrela.png";

export const Testimonials = () => {
  const DepoimentosLista = [
    {
      nome: "Manu",
      imagemUrl: parceira12Manu,
      depoimento:
        "Não foi fácil encontrar outras mulheres que gostassem de basquete na minha região. Mas consegui graças ao site.",
    },
    {
      nome: "Jéssica",
      imagemUrl: parceira2Jessica,
      depoimento:
        "Fazer cardio sozinha é muito chato. Mas ter uma amiga para conversar sempre traz mais motivação.",
    },
    {
      nome: "Sandra",
      imagemUrl: parceira8Sandra,
      depoimento:
        "Recomendo muito! Criamos um grupo de Crossfit só para mulheres.",
    },
    {
      nome: "Camila",
      imagemUrl: parceira5Camila,
      depoimento:
        "No jiu-jitsu talvez sejamos minoria, mas aqui somos unanimidade!",
    },
  ];

  return (
    <section className="paddingPadrao centralizarElementos">
      <h2 className="fonteTitulo marginBottomTitulo textoMaiusculo corVerdeEscuro tituloSection">
        Depoimentos
      </h2>
      <ul id="depoimentosLista">
        {DepoimentosLista.map((pessoa, index) => (
          <li className="depoimentoCartao corVerdeEscuro" key={index}>
            <img src={pessoa.imagemUrl} alt="Mulher" />
            <div>
              <div className="nomeEAvaliacao">
                <p className="pessoaNome">{pessoa.nome}</p>
                <ul className="estrelasLista">
                  {[...Array(5)].map((estrela,index)=>(<li key={index}>
                    <img src={iconeEstrela} alt="Estrela" className="iconeEstrela" />
                  </li>))}
                </ul>
              </div>

              <p>{pessoa.depoimento}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="botaoVerde">Quero participar também</button>
    </section>
  );
};
