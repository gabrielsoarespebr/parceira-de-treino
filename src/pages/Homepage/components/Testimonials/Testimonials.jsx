import "./Testimonials.css";

import parceira12Manu from "/src/assets/image/usuarias/parceira12Manu.png";
import parceira2Jessica from "/src/assets/image/usuarias/parceira2Jessica.png";
import parceira8Sandra from "/src/assets/image/usuarias/parceira8Sandra.png";
import parceira5Camila from "/src/assets/image/usuarias/parceira5Camila.png";

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
                  {[...Array(5)].map((estrela, index) => (
                    <li key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>

              <p>{pessoa.depoimento}</p>
            </div>
          </li>
        ))}
      </ul>
      <a href="/cadastrousuaria" className="botaoRoxo">Quero participar também</a>
    </section>
  );
};
