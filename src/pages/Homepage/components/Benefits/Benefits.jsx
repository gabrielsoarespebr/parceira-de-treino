import "./Benefits.css";

import iconeMusculoUrl from "/src/assets/icons/iconeMusculo.png";
import iconeEscudoUrl from "/src/assets/icons/iconeEscudo.png";
import iconeCoracaoUrl from "/src/assets/icons/iconeCoracao.png";
import iconeTocaAquiUrl from "/src/assets/icons/iconeTocaAqui.png";

export const Benefits = () => {
  const BeneficiosLista = [
    {
      titulo: "+ MOTIVAÇÃO",
      iconeUrl: iconeMusculoUrl,
      iconeTextoAlternativo: "Ícone de músculo",
      descricao:
        "84,4% das mulheres acreditam que ter uma parceira de treino melhora a motivação",
    },
    {
      titulo: "+ SEGURANÇA",
      iconeUrl: iconeEscudoUrl,
      iconeTextoAlternativo: "Ícone de escudo",
      descricao:
        "81,3% das mulheres acreditam que ter uma parceira de treino traz mais segurança",
    },
    {
      titulo: "+ SAÚDE",
      iconeUrl: iconeCoracaoUrl,
      iconeTextoAlternativo: "Ícone de coração",
      descricao:
        "72% das pessoas que praticam exercícios com frequência não tiveram problemas de saúde nos últimos 12 meses",
    },
    {
      titulo: "+ CONEXÕES",
      iconeUrl: iconeTocaAquiUrl,
      iconeTextoAlternativo: "Ícone de amizade",
      descricao:
        "70,6% das mulheres preferem treinar em dupla ou em grupos",
    },
  ];

  return (
    <section className="paddingPadrao centralizarElementos">
      <h2 className="fonteTitulo marginBottomTitulo textoMaiusculo corVerdeEscuro tituloSection">
        Ter uma parceira de treino é
      </h2>
      <ul className="displayFlex beneficiosLista">
        {BeneficiosLista.map((beneficio, index) => (
          <li className="beneficio" key={index}>
            <p className="fonteTitulo">{beneficio.titulo}</p>
            <img
              src={beneficio.iconeUrl}
              alt={beneficio.iconeTextoAlternativo}
            />
            <p>{beneficio.descricao}</p>
          </li>
        ))}
      </ul>
      <button className="botaoRoxo">Aproveitar benefícios</button>
    </section>
  );
};
