import "./ProfissionalCard.css";

import { useState } from "react";

export const ProfissionalCard = ({ profissional }) => {
  const [id, setId] = useState(profissional.id);
  const [fotoPerfilUrl, setFotoPerfilUrl] = useState(
    profissional.fotoPerfilUrl
  );
  const [nome, setNome] = useState(profissional.nome);
  const [profissao, setProfissao] = useState(profissional.profissao);

  // PROFISSÃO - começo
  let profissaoTexto = "";

  switch (profissao) {
    case 1:
      profissaoTexto = "Personal trainer";
      break;
    case 2:
      profissaoTexto = "Nutricionista";
      break;
    case 3:
      profissaoTexto = "Fisioterapeuta";
      break;
    case 4:
      profissaoTexto = "Treinadora de corrida";
      break;
    case 5:
      profissaoTexto = "Instrutora de Pilates";
      break;
    default:
      profissaoTexto = "Profissão desconhecida";
      break;
  }
  // PROFISSÃO - fim

  return (
    <div className="profissionalCard">
      <div>
        <div className="iconeDistanciaProfissional">
          <i className="fa-solid fa-location-dot"></i>
          <p>10 km</p>
        </div>
        <img
          src={`./src/assets/image/profissionais/${fotoPerfilUrl}`}
          alt="Foto de profissional"
        />
      </div>
      <div>
        <p>{nome}</p>
        <div className="profissaoDiv">
          <p>Profissão</p>
          <p>{profissaoTexto}</p>
        </div>
        <div className="redesSociaisDiv">
          <p>Redes sociais</p>
          <ul>
            <li>
              <a href={profissional.whatsappUrl} target="_blank">
                <i className="fa-brands fa-square-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href={profissional.instagramUrl} target="_blank">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </li>
            <li>
              <a href={`mailto:${profissional.emailUrl}`} target="_blank">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>

          {/* <ul>
            {esportesLista.map((esporte, id) => (
              <li key={id}>{esporte}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};
