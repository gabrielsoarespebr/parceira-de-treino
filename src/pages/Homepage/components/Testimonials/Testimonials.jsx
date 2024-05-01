import "./Testimonials.css";

import parceira12Manu from "/src/assets/image/parceira12Manu.png";

export const Testimonials = () => {
  const DepoimentosLista = [
    {
      nome: "Manu",
      imagemUrl: parceira12Manu,
      imagemTextoAlternativo: "Mulher",
      descricao:
        "Não foi fácil encontrar outras mulheres que gostassem de basquete na minha região. Mas consegui graças à Parceira de Treino.",
    },
  ];

  return (
    <section className="paddingPadrao centralizarElementos">
      <h2 className="fonteTitulo marginBottomTitulo textoMaiusculo corVerdeEscuro tituloSection">
        Depoimentos
      </h2>
      <ul id="depoimentosLista">
        {DepoimentosLista.map((pessoa, index) => (
          <li className="depoimento corVerdeEscuro" key={index}>
            <img src={pessoa.imagemUrl} alt={pessoa.imagemTextoAlternativo} />
            <div>
              <div>
                <p className="fonteTitulo">{pessoa.nome}</p>
              </div>

              <p>{pessoa.descricao}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="botaoVerde">Aproveitar benefícios</button>
    </section>
  );
};
