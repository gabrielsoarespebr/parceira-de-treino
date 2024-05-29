import "./CadastroProfissional.css";
import { Divider } from "../../shared/components/Divider/Divider";
import { Footer } from "./components/Footer/Footer";
import logo from "/src/assets/image/logoBranco.png";
import mulheresDeMaosDadas from "/src/assets/image/mulheresDeMaosDadas.jpg";
import identidadeFrente from "/src/assets/image/identidadeFrente.png";
import identidadeVerso from "/src/assets/image/identidadeVerso.png";
import mulherIdentidadeFrente from "/src/assets/image/mulherIdentidadeFrente.jpg";
import mulherIdentidadeVerso from "/src/assets/image/mulherIdentidadeVerso.jpg";
import { EstadosBrasileiros } from "../../data/enums/EstadosBrasileiros";
import { Profissoes } from "../../data/enums/Profissoes";
import { useEffect, useState } from "react";

export const CadastroProfissional = () => {
  // ETAPAS DO CADASTRO - começo
  const [etapaCadastroUsuaria, setEtapaCadastroUsuaria] = useState(0);
  const [etapaCadastroUsuariaLista, setEtapaCadastroUsuariaLista] = useState([
    { id: 1, ativada: false },
    { id: 2, ativada: false },
    { id: 3, ativada: false },
    { id: 4, ativada: false },
    { id: 5, ativada: false },
    { id: 6, ativada: false },
  ]);

  useEffect(() => {
    const etapaCadastroUsuariaListaAtualizada = [...etapaCadastroUsuariaLista];

    etapaCadastroUsuariaListaAtualizada.forEach((etapa) => {
      if (etapa.id === etapaCadastroUsuaria) etapa.ativada = true;
      else if (etapa.id > etapaCadastroUsuaria) etapa.ativada = false;
    });

    setEtapaCadastroUsuariaLista(etapaCadastroUsuariaListaAtualizada);
  }, [etapaCadastroUsuaria]);
  // ETAPAS DO CADASTRO - fim

  // ESTILO CSS DO OBJETIVO - começo
  const [objetivoEscolhido, setObjetivoEscolhido] = useState(-1);
  // ESTILO CSS DO OBJETIVO - fim

  // ESTILO CSS DOS ESPORTES - começo
  const [esporteEscolhidoLista, setEsporteEscolhidoLista] = useState([]);

  const atualizaEsporteEscolhidoLista = (id) => {
    if (esporteEscolhidoLista.length > 3) {
      let esporteEscolhidoListaAtualizada = [...esporteEscolhidoLista];

      esporteEscolhidoListaAtualizada.shift();

      esporteEscolhidoListaAtualizada.push(id);

      setEsporteEscolhidoLista([esporteEscolhidoListaAtualizada]);
    } else {
      setEsporteEscolhidoLista([...esporteEscolhidoLista, id]);
    }
  };
  // ESTILO CSS DOS ESPORTES - fim

  // PLANO ESCOLHIDO - começo
  const [planoEscolhido, setPlanoEscolhido] = useState(1);
  // PLANO ESCOLHIDO - fim

  return (
    <>
      <header>
        <img src={logo} alt="Logotipo FitSister" id="logoHeader" />
        <a href="/" id="voltarParaHomepage">
          <i className="fa-solid fa-house"></i>
          <p>Voltar para Homepage</p>
        </a>
      </header>
      <section className="cadastroProfissional">
        <ul id="etapaCadastroUsuariaNumeroLista">
          {etapaCadastroUsuariaLista.map((etapa) => {
            if (etapa.id === 6) {
              return (
                <li
                  key={etapa.id}
                  className={`etapaCadastroUsuariaNumero ${
                    etapa.ativada ? "etapaAtivada" : "etapaDesativada"
                  }`}
                >
                  <i className="fa-solid fa-check"></i>
                </li>
              );
            } else {
              return (
                <li
                  key={etapa.id}
                  className={`etapaCadastroUsuariaNumero ${
                    etapa.ativada ? "etapaAtivada" : "etapaDesativada"
                  }`}
                >
                  {etapa.id}
                </li>
              );
            }
          })}
        </ul>
        {etapaCadastroUsuaria === 0 && (
          <div className="etapaCadastroUsuaria" id="etapaCadastroUsuariaZero">
            <h2>Informações sobre o cadastro</h2>
            <div>
              <p>
                Pela segurança das nossas usuárias, o cadastro na nossa
                plataforma requer as seguintes etapas:
              </p>
              <div>
                <ol>
                  <li>Fotos para verificação</li>
                  <li>Dados pessoais</li>
                  <li>Dados de login</li>
                  <li>Profissão</li>
                  <li>Sua apresentação</li>
                </ol>
                <img src={mulheresDeMaosDadas} alt="Mulheres de mãos dadas" />
              </div>
            </div>
            <div className="botoesDiv">
              <a href="/" className="botaoCadastro">
                Voltar
              </a>
              <button
                className="botaoCadastro"
                onClick={() =>
                  setEtapaCadastroUsuaria(etapaCadastroUsuaria + 1)
                }
              >
                Estou de acordo
              </button>
            </div>
          </div>
        )}
        {etapaCadastroUsuaria === 1 && (
          <div className="etapaCadastroUsuaria" id="etapaCadastroUsuariaUm">
            <h2>Fotos para verificação</h2>
            <div>
              <p>
                Envie as fotos de verificação conforme os exemplos a seguir:
              </p>
              <div>
                <ul>
                  <li>
                    <div>
                      <p>Documento de identidade (frente)</p>
                      <img
                        src={identidadeFrente}
                        alt="Documento de identidade (frente)"
                      />
                      <input
                        type="file"
                        name="identidadeFrente"
                        id="identidadeFrente"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>Documento de identidade (verso)</p>
                      <img
                        src={identidadeVerso}
                        alt="Documento de identidade (verso)"
                      />
                      <input
                        type="file"
                        name="identidadeVerso"
                        id="identidadeVerso"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>Foto segurando documento de identidade (frente)</p>
                      <img
                        src={mulherIdentidadeFrente}
                        alt="Mulher segurando documento de identidade (frente)"
                      />
                      <input
                        type="file"
                        name="mulherIdentidadeFrente"
                        id="mulherIdentidadeFrente"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>Foto segurando documento de identidade (verso)</p>
                      <img
                        src={mulherIdentidadeVerso}
                        alt="Mulher segurando documento de identidade (verso)"
                      />
                      <input
                        type="file"
                        name="mulherIdentidadeVerso"
                        id="mulherIdentidadeVerso"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="botoesDiv">
              <button
                className="botaoCadastro"
                onClick={() =>
                  setEtapaCadastroUsuaria(etapaCadastroUsuaria - 1)
                }
              >
                Voltar
              </button>
              <button
                className="botaoCadastro"
                onClick={() =>
                  setEtapaCadastroUsuaria(etapaCadastroUsuaria + 1)
                }
              >
                Avançar
              </button>
            </div>
          </div>
        )}
        {etapaCadastroUsuaria === 2 && (
          <div className="etapaCadastroUsuaria" id="etapaCadastroUsuariaDois">
            <h2>Dados pessoais</h2>
            <div>
              <p>Preencha seus dados:</p>
              <form>
                <fieldset>
                  <div>
                    <div>
                      <label htmlFor="usuariaNome">Nome*</label>
                      <input type="text" placeholder="Nome" id="usuariaNome" />
                    </div>

                    <div>
                      <label htmlFor="usuariaSobrenome">Sobrenome*</label>
                      <input
                        type="text"
                        placeholder="Sobrenome"
                        id="usuariaSobrenome"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <label htmlFor="usuariaCpf">CPF*</label>
                      <input type="text" placeholder="CPF" id="usuariaCpf" />
                    </div>
                    <div>
                      <label htmlFor="usuariaDataNascimento">
                        Data de nascimento*
                      </label>
                      <input
                        type="date"
                        name="usuariaDataNascimento"
                        id="usuariaDataNascimento"
                      />
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <div>
                    <div>
                      <label htmlFor="usuariaEnderecoCep">CEP*</label>
                      <input
                        type="text"
                        placeholder="Insira seu CEP"
                        id="usuariaEnderecoCep"
                      />
                    </div>

                    <div>
                      <label htmlFor="usuariaEnderecoEstado">UF*</label>
                      <select
                        name="usuariaEnderecoEstado"
                        id="usuariaEnderecoEstado"
                      >
                        {Object.keys(EstadosBrasileiros).map((estado) => {
                          if (isNaN(estado)) {
                            return <option key={estado}>{estado}</option>;
                          }
                        })}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="usuariaEnderecoCidade">Cidade*</label>
                      <input
                        type="text"
                        placeholder="Cidade"
                        id="usuariaEnderecoCidade"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <label htmlFor="usuariaEnderecoBairro">Bairro*</label>
                      <input
                        type="text"
                        placeholder="Bairro"
                        id="usuariaEnderecoBairro"
                      />
                    </div>

                    <div>
                      <label htmlFor="usuariaEnderecoRua">Rua*</label>
                      <input
                        type="text"
                        placeholder="Rua"
                        id="usuariaEnderecoRua"
                      />
                    </div>

                    <div>
                      <label htmlFor="usuariaEnderecoNumero">Número*</label>
                      <input
                        type="text"
                        placeholder="Nº"
                        id="usuariaEnderecoNumero"
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="botoesDiv">
              <button
                className="botaoCadastro"
                onClick={() =>
                  setEtapaCadastroUsuaria(etapaCadastroUsuaria - 1)
                }
              >
                Voltar
              </button>
              <button
                className="botaoCadastro"
                onClick={() =>
                  setEtapaCadastroUsuaria(etapaCadastroUsuaria + 1)
                }
              >
                Avançar
              </button>
            </div>
          </div>
        )}
        {etapaCadastroUsuaria === 3 && (
          <div className="etapaCadastroUsuaria" id="etapaCadastroUsuariaTres">
            <h2>Dados de login</h2>
            <div>
              <p>Preencha seus dados:</p>
              <form>
                <fieldset>
                  <div>
                    <div>
                      <label htmlFor="usuariaEmail">E-mail*</label>
                      <input
                        type="text"
                        placeholder="Email"
                        id="usuariaEmail"
                      />
                    </div>

                    <div>
                      <label htmlFor="usuariaSenha">Senha*</label>
                      <input
                        type="password"
                        name="usuariaSenha"
                        id="usuariaSenha"
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="botoesDiv">
              <button
                className="botaoCadastro"
                onClick={() =>
                  setEtapaCadastroUsuaria(etapaCadastroUsuaria - 1)
                }
              >
                Voltar
              </button>
              <button
                className="botaoCadastro"
                onClick={() =>
                  setEtapaCadastroUsuaria(etapaCadastroUsuaria + 1)
                }
              >
                Avançar
              </button>
            </div>
          </div>
        )}
        {etapaCadastroUsuaria === 4 && (
          <div className="etapaCadastroUsuaria" id="etapaCadastroUsuariaQuatro">
            <h2>Profissão</h2>
            <div>
              <div id="objetivo">
                <p>Selecione sua profissão (máximo: 1)</p>
                <ul>
                  {Object.values(Profissoes).map((objetivo, id) => {
                    if (isNaN(objetivo))
                      return (
                        <li
                          key={id}
                          className={
                            id === objetivoEscolhido
                              ? "objetivoAtivo"
                              : "objetivoInativo"
                          }
                          onClick={() => setObjetivoEscolhido(id)}
                        >
                          {objetivo}
                        </li>
                      );
                  })}
                </ul>
              </div>
            </div>
            <div className="botoesDiv">
              <button
                className="botaoCadastro"
                onClick={() =>
                  setEtapaCadastroUsuaria(etapaCadastroUsuaria - 1)
                }
              >
                Voltar
              </button>
              <button
                className="botaoCadastro"
                onClick={() =>
                  setEtapaCadastroUsuaria(etapaCadastroUsuaria + 1)
                }
              >
                Avançar
              </button>
            </div>
          </div>
        )}
        {etapaCadastroUsuaria === 5 && (
          <div className="etapaCadastroUsuaria" id="etapaCadastroUsuariaCinco">
            <h2>Sua apresentação</h2>
            <div>
              <div>
                <p>Foto de perfil:</p>
                <input type="file" name="perfilFoto" id="perfilFoto" />
              </div>

              {/* <div>
                <p>
                  Descreva quem você é de acordo com seus gostos e interesses:
                </p>
                <textarea
                  name="perfilDescricao"
                  id="perfilDescricao"
                ></textarea>
              </div> */}
            </div>
            <div className="botoesDiv">
              <button
                className="botaoCadastro"
                onClick={() =>
                  setEtapaCadastroUsuaria(etapaCadastroUsuaria - 1)
                }
              >
                Voltar
              </button>
              <button
                className="botaoCadastro"
                onClick={() =>
                  setEtapaCadastroUsuaria(etapaCadastroUsuaria + 1)
                }
              >
                Cadastrar
              </button>
            </div>
          </div>
        )}
        {etapaCadastroUsuaria === 6 && (
          <div className="etapaCadastroUsuaria" id="etapaCadastroUsuariaSete">
            <h2>Pronto!</h2>
            <p>Seus dados serão avaliados. A ativação da conta será notificada por e-mail.</p>
          </div>
        )}
      </section>
      <Divider />
      <Footer />
    </>
  );
};
