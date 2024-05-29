import "./TermosDeUso.css"
import logo from "/src/assets/image/logoBranco.png";
import { Footer } from "../Homepage/components/Footer/Footer";
import { Divider } from "../../shared/components/Divider/Divider";

export const TermosDeUso = () => {
  return (
    <>
      <header>
        <img src={logo} alt="Logotipo FitSister" id="logoHeader" />
        <a href="/" id="voltarParaHomepage">
          <i className="fa-solid fa-house"></i>
          <p>Voltar para Homepage</p>
        </a>
      </header>
      <section id="termosDeUso">
        <h2>Termos de uso</h2>
        <div>
          <p>
            Bem-vinda a Fit Sister, uma plataforma exclusivamente para mulheres
            que buscam se conectar, compartilhar experiências e se motivar em
            suas jornadas de saúde e bem-estar.
          </p>
          <p>
            Ao utilizar nossa plataforma, você concorda com os seguintes termos:
          </p>

          <ol>
            <li>
              Cadastro: Para se tornar usuária do Fit Sister, é necessário que
              se identifique como do gênero feminino e preencha corretamente
              todas as informações solicitadas no formulário de cadastro.
            </li>
            <li>
              Privacidade: Todas as informações fornecidas durante o cadastro
              serão mantidas em sigilo e não serão compartilhadas com terceiros
              sem o seu consentimento.
            </li>
            <li>
              Conduta: Esperamos que todas as usuárias do Fit Sister sejam
              respeitosas, empáticas e solidárias umas com as outras. Qualquer
              forma de discriminação, bullying ou comportamento inadequado não
              será tolerado.
            </li>
            <li>
              Conteúdo: É permitido compartilhar dicas, fotos, vídeos, mensagens
              relacionadas à saúde, fitness e bem-estar. Qualquer conteúdo
              considerado inadequado ou ofensivo será removido pela equipe do
              Fit Sister.
            </li>
            <li>
              Responsabilidade: Você é responsável por todas as interações e
              conteúdos que publicar no site. Certifique-se de que suas
              postagens sejam positivas e construtivas.
            </li>
            <li>
              Segurança: Para garantir a segurança de todas as usuárias,
              recomendamos não compartilhar qualquer tipo de informação
              particular sigilosa como dados bancários e números de cartão de
              crédito, senhas, informações de contas bancárias, documentos de
              identidade, entre outros. É importante manter esses dados
              confidenciais para proteger sua segurança e privacidade.
            </li>
          </ol>
          <p>
            Ao continuar utilizando o Fit Sister, você concorda em cumprir estes
            termos de uso.
          </p>
          <p>
            Caso haja violação de alguma destas regras, sua conta poderá ser
            suspensa ou excluída.
          </p>
          <p>
            Agradecemos sua compreensão e colaboração para manter a comunidade
            do Fit Sister um ambiente saudável e acolhedor para todas as
            mulheres.
          </p>
        </div>
      </section>
      <Divider/>
      <Footer/>
    </>
  );
};
