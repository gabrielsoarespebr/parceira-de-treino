import React from 'react';
import { Divider } from "../../shared/components/Divider/Divider";
import { Footer } from "../Homepage/components/Footer/Footer";
import './VisaoPerfil.css';
import iconeInstagram from "../../assets/icons/icons8-instagram-50.png";
import iconeWhatsapp from "../../assets/icons/icons8-whatsapp-50.png";
import iconeTwitter from "../../assets/icons/icons8-twitterx-50.png";
import parceiroBrenda from "../../assets/image/usuarias/parceira1Brenda.png";

export function VisaoPerfil() {
    
    console.log('Path to Instagram icon:', iconeInstagram);
    console.log('Path to Whatsapp icon:', iconeWhatsapp);
    console.log('Path to Twitter icon:', iconeTwitter);
    console.log('Path to Parceiro Brenda:', parceiroBrenda);
   

    return (
        <>
            <header>
                <nav>
                    <ul className="barraDeNavegacao">
                        <li>
                            <a href="">
                                <i className="fa-solid fa-circle-user"></i>
                                <p>Meu perfil</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
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
                            <a href="">
                                <i className="fa-solid fa-right-to-bracket"></i>
                                <p>Sair</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <div className="CaixaVisuPerfil">
                <div className="imagemNome">
                    <img className='imagemPerfil' src={parceiroBrenda} alt="perfil" />
                    <h2 className="brenda">Brenda Santos, 25</h2>
                    <h3 className="Localizacao">12km • Recife, PE</h3>
                    <h4 className="disponivel">Disponível...</h4>
                </div>
                <p className="descricao">
                    Gosto de correr em parques e também gosto bastante de me exercitar em academias de musculação.
                </p>

                <h2 className="interesses">Interesses da parceira</h2>
                <div>
                    <div className="ciclismo">Ciclismo</div>
                    <div className="volei">Vôlei</div>
                    <div className="natacao">Natação</div>
                    <div className="surf">Surf</div>
                    <div className="mpb">mpb</div>
                    <div className="meditacao">Meditação</div>
                    <div className="praia">Praia</div>
                    <div className="navegacao">Navegação</div>
                </div>

                <h3 className="informacoes">Informações destinada a Sister de Jéssica</h3>

                <div className='RedesSociais'>
                    <div className='social-item'>
                        <div className="Instagram">
                            <img className="SimboloInsta" src={iconeInstagram} alt="logoInsta" />
                        </div>
                        <h5 className="insta">@jessialbq</h5>
                    </div>
                    
                    <div className='social-item'>
                        <div className="logoX">
                            <img className="SimboloX" src={iconeTwitter} alt="logotwitter" />
                        </div>
                        <h5 className="X">@jessialbq</h5>
                    </div>
                    
                    <div className='social-item'>
                        <div>
                            <img className="ImagemWpp" src={iconeWhatsapp} alt="logoWhatsapp" />
                        </div>
                        <h5 className="wpp">(81) 98877-6655</h5>
                    </div>
                </div>
            </div>

            {/* <div className="CaixaMaisParceiras">
                <div>
                    <h2 className="MaisParceiras">Mais parceiras disponíveis</h2>
                </div>
            </div> */}
            <Divider />
            <Footer />
        </>
    );
}

export default VisaoPerfil;

