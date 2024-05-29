import { Divider } from "../../shared/components/Divider/Divider";
import { Footer } from "../Homepage/components/Footer/Footer";
import './EditarPerfil.css'
import parceirojessica from "../../assets/image/usuarias/parceira2Jessica.png"

export function EditarPerfil() {

    console.log('Pach to Parceiro Jessica', parceirojessica)


    return (
        <>
            <header>
            <img
          src="./src/assets/image/logoBranco.png"
          alt="Logotipo FitSister"
          id="logoHeader"
        />
        <nav>
          <ul className="barraDeNavegacao">
            <li>
              <a href="">
                <i className="fa-solid fa-circle-user"></i>
                <p>Meu perfil</p>
              </a>
            </li>
            <li>
              <a href="/chat">
                <i className="fa-solid fa-comments"></i>
                <p>Chat</p>
              </a>
            </li>
            <li>
              <a href="/muraldeprofissionais">
                <span className="material-icons">sports</span>
                <p>Profissionais</p>
              </a>
            </li>
            <li>
              <a href="/home">
                <i className="fa-solid fa-right-to-bracket"></i>
                <p>Sair</p>
              </a>
            </li>
          </ul>
        </nav>
            </header>

            <h1 className="areaUsuario">Área da usuária</h1>
            
            <div className="infoPessoal">
                
                <img className="perfilFoto" src= {parceirojessica} alt="fotoPerfil" />
                
                <h5 className="nome"> Nome</h5>
                <div className="espacoNome">
                    <h4 className="nomeUsuaria">Jessica Albuquerque</h4>  
                </div>

                <h5 className="idade">Idade</h5>
                <div className="campoIdade">
                    <p className="idadeUsuaria">28</p>
                </div>

                <h5 className="localizacao">Localização</h5>
                <div className="campoLocalizacao">
                    <p className="localizacaoUsuaria">Casa Forte- Recife, Pernambuco</p>
                </div>

                <h5 className="objetivo">Objetivo</h5>
                <div className="campoObjetivo">
                    <p className="objetivoUsuaria">Vida saudável</p>
                </div>
            </div>

            <div className="ocupaçãoParceira"> 
                <h3 className="descricao">Descrição</h3>
                <div className="campoDescricao">
                   <p className="escritaDescricao"> Amo exercícios ao ar livre, o contato com a <br />natureza me motiva a continuar a vida saudável.</p> 
                    
                </div>

                <h3 className="interesses"> Interesses</h3>
                <div className="navegacao1">Navegação</div>
                <div className="surf1">Surf</div>
                <div className="praia1">Praia</div>
                <div className="mpb1">Mpb</div>
                <div className="meditacao1">Meditação</div>
            
                <h3 className="esportes">Esportes</h3>
                <div className="ciclismo1">Ciclismo</div>
                <div className="natacao1">Natação</div>
                <div className="volei1"> Vôlei</div>
            </div>

            <button className="butao">Salvar</button>


            <Divider/>
            <Footer/>
        </>
    )
}

export default EditarPerfil;