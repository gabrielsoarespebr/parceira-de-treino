import "./UsuariaCard.css";

import iconeFechar from "/src/assets/icons/iconeFechar.png";
import iconeChat from "/src/assets/icons/iconeChat.png";
import iconeInfo from "/src/assets/icons/iconeInfo.png";
import { useState } from "react";

export const UsuariaCard = ({ usuaria, OcultarUsuaria }) => {
  const [id, setId] = useState(usuaria.id);
  const [fotoPerfilUrl, setFotoPerfilUrl] = useState(usuaria.fotoPerfilUrl);
  const [nome, setNome] = useState(usuaria.nome);
  const [dataNascimento, setDataNascimento] = useState(usuaria.dataNascimento);
  const [objetivo, setObjetivo] = useState(usuaria.objetivo);
  const [esportes, setEsportes] = useState(usuaria.esportes);

  // IDADE - começo
  const dataNasc = new Date(dataNascimento);

  const dataAtual = new Date();

  let idade = dataAtual.getFullYear() - dataNasc.getFullYear();

  const mesAtual = dataAtual.getMonth();
  const diaAtual = dataAtual.getDate();
  const mesNascimento = dataNasc.getMonth();
  const diaNascimento = dataNasc.getDate();

  if (
    mesAtual < mesNascimento ||
    (mesAtual === mesNascimento && diaAtual < diaNascimento)
  ) {
    idade--;
  }
  // IDADE - fim

  // OBJETIVO - começo
  let objetivoTexto = "";

  switch (objetivo) {
    case 1:
      objetivoTexto = "Ganhar músculo";
      break;
    case 2:
      objetivoTexto = "Perder peso";
      break;
    case 3:
      objetivoTexto = "Vida saudável";
      break;
    case 4:
      objetivoTexto = "Projeto Verão";
      break;
    case 5:
      objetivoTexto = "Competir";
      break;
    default:
      objetivoTexto = "Objetivo desconhecido";
      break;
  }
  // OBJETIVO - fim

  // ESPORTES - começo
  let esportesLista = [];

  esportes.forEach((esporte) => {
    switch (esporte) {
      case 1:
        esportesLista.push("Musculação");
        break;
      case 2:
        esportesLista.push("Crossfit");
        break;
      case 3:
        esportesLista.push("Corrida");
        break;
      case 4:
        esportesLista.push("Caminhada");
        break;
      case 5:
        esportesLista.push("Ciclismo");
        break;
      case 6:
        esportesLista.push("Natação");
        break;
      case 7:
        esportesLista.push("Futebol de campo");
        break;
      case 8:
        esportesLista.push("Futsal");
        break;
      case 9:
        esportesLista.push("Vôlei");
        break;
      case 10:
        esportesLista.push("Basquete");
        break;
      case 11:
        esportesLista.push("Handebol");
        break;
      case 12:
        esportesLista.push("Boxe");
        break;
      case 13:
        esportesLista.push("Jiu-jitsu");
        break;
      case 14:
        esportesLista.push("Muay thai");
        break;
      case 15:
        esportesLista.push("Taekwondo");
        break;
      case 16:
        esportesLista.push("Fisiculturismo");
        break;
      case 17:
        esportesLista.push("Tênis");
        break;
      case 18:
        esportesLista.push("Tênis de mesa");
        break;
      case 19:
        esportesLista.push("Tênis de praia");
        break;
      case 20:
        esportesLista.push("Vôlei de praia");
        break;
      case 21:
        esportesLista.push("Slackline");
        break;
      case 22:
        esportesLista.push("Surf");
        break;
      case 23:
        esportesLista.push("Yoga");
        break;
      case 24:
        esportesLista.push("Pilates");
        break;
      case 25:
        esportesLista.push("Hidroginástica");
        break;
      default:
        esportesLista.push("Objetivo desconhecido");
        break;
    }
  });
  // ESPORTES - fim

  return (
    <div className="usuariaCard">
      <div>
        <img
          src={iconeFechar}
          alt="ícone de fechar"
          className="iconeFechar"
          onClick={() => OcultarUsuaria(id)}
        />
        <div className="acoesUsuariaCard">
          <div className="iconeDistancia">
            <i className="fa-solid fa-location-dot"></i>
            <p>10 km</p>
          </div>
          <div>
            <a href="/chat">
              <img src={iconeChat} alt="ícone de chat" className="iconeChat" />
            </a>
            <a href="/visaoperfil">
              <img
                src={iconeInfo}
                alt="ícone de informação"
                className="iconeInfo"
              />
            </a>
          </div>
        </div>
        <img
          src={`https://raw.githubusercontent.com/gabrielsoarespebr/parceira-de-treino/main/src/assets/image/usuarias/${fotoPerfilUrl}.png`}
          alt="Foto de usuária"
        />
      </div>
      <div>
        <div>
          <p>{nome}</p>
          <p>,&nbsp;</p>
          <p>{idade}</p>
        </div>
        <div className="objetivoDiv">
          <p>Objetivo</p>
          <p>{objetivoTexto}</p>
        </div>
        <div className="esportesDiv">
          <p>Esportes</p>
          <ul>
            {esportesLista.map((esporte, id) => (
              <li key={id}>{esporte}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
