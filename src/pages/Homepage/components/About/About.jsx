import "./About.css";
import mulherNoCelular1 from "/src/assets/image/mulherNoCelular1.png";
import mulherNoCelular2 from "/src/assets/image/mulherNoCelular2.png";
import duplaParceiras2 from "/src/assets/image/duplaParceiras2.png";

export const About = () => {
  const passoAPassoLista = [
    {
      imagemUrl: mulherNoCelular1,
      imagemTextoAlternativo: "Mulher no celular",
      descricao:
        "Você se cadastra gratuitamente, informando seu objetivo, os esportes que pratica, bem como seus interesses pessoais.",
    },
    {
      imagemUrl: mulherNoCelular2,
      imagemTextoAlternativo: "Mulher no celular",
      descricao:
        "Você encontra mulheres na sua região que também buscam por uma fit sister.",
    },
    {
      imagemUrl: duplaParceiras2,
      imagemTextoAlternativo: "Mulheres treinando juntas",
      descricao:
        "Vocês conversam e, se rolar afinidade, tornam-se fit sisters.",
    },
  ];

  return (
    <section className="paddingPadrao centralizarElementos fundoRoxoTranslucido corRoxo">
      <h2 className="fonteTitulo marginBottomTitulo textoMaiusculo tituloSection">
        Como funciona?
      </h2>

      <ul id="passoAPassoLista">
        {passoAPassoLista.map((passo, index) => {
          return (
            <li key={index}>
              <img src={passo.imagemUrl} alt={passo.imagemTextoAlternativo} />
              <div>
                <p className="numero">{index + 1}</p>
                <p>{passo.descricao}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <button className="botaoRoxo">Encontre sua fit sister</button>
    </section>
  );
};
