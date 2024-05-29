import "./PoliticaDePrivacidade.css";
import logo from "/src/assets/image/logoBranco.png";
import { Footer } from "../Homepage/components/Footer/Footer";
import { Divider } from "../../shared/components/Divider/Divider";

export const PoliticaDePrivacidade = () => {
  return (
    <>
      <header>
        <img src={logo} alt="Logotipo FitSister" id="logoHeader" />
        <a href="/" id="voltarParaHomepage">
          <i className="fa-solid fa-house"></i>
          <p>Voltar para Homepage</p>
        </a>
      </header>
      <section id="politicaDePrivacidade">
        <h2>Política de privacidade</h2>
        <div>
          <p>
            A política de privacidade do site Fit Sister tem como objetivo
            garantir a segurança e privacidade das informações das usuárias que
            se cadastram e se conectam na plataforma.
          </p>
          <p>
            Abaixo estão detalhadas as diretrizes que regem a coleta, o uso e a
            proteção dos dados das usuárias:
          </p>

          <ol>
            <li>
              Coleta de informações: Para se cadastrar e utilizar o site Fit
              Sister, as usuárias precisam fornecer informações pessoais, como
              nome, endereço de e-mail, idade, altura, peso e objetivos de saúde
              e fitness. Esses dados são utilizados para personalizar a
              experiência das usuárias na plataforma e oferecer conteúdo
              relevante e personalizado.
            </li>
            <li>
              Uso das informações: As informações fornecidas pelas usuárias são
              utilizadas exclusivamente para os fins descritos no site Fit
              Sister, como conectar mulheres interessadas em saúde e bem-estar,
              compartilhar dicas e informações sobre exercícios e alimentação
              saudável, e promover a interação e o apoio mútuo.
            </li>
            <li>
              Proteção dos dados: O site Fit Sister se compromete a proteger as
              informações das usuárias e adota medidas de segurança para evitar
              o acesso não autorizado, a divulgação ou a perda dos dados
              pessoais. Além disso, as informações das usuárias são armazenadas
              de forma segura e confidencial, de acordo com as leis de proteção
              de dados vigentes.
            </li>
            <li>
              Compartilhamento de informações: O site Fit Sister não compartilha
              as informações das usuárias com terceiros sem o consentimento
              prévio das mesmas. As usuárias têm o controle sobre suas
              informações e podem optar por compartilhá-las com outras usuárias
              da plataforma de forma voluntária.
            </li>
            <li>
              Atualização de informações: As usuárias têm o direito de
              atualizar, corrigir ou excluir suas informações pessoais a
              qualquer momento. Para isso, basta acessar a conta no site Fit
              Sister e fazer as alterações desejadas.
            </li>
            <li>
              Segurança: Para garantir a segurança de todas as usuárias,
              recomendamos não compartilhar qualquer tipo de informação
              particular sigilosa como dados bancários e números de cartão de
              crédito, senhas, informações de contas bancárias, documentos de
              identidade, entre outros. É importante manter esses dados
              confidenciais para proteger sua segurança e privacidade.
            </li>
            <li>
              Consentimento: Ao se cadastrar e utilizar o site Fit Sister, as
              usuárias concordam com a política de privacidade descrita acima e
              autorizam o uso de suas informações de acordo com os termos
              estabelecidos.
            </li>
          </ol>
          <p>
            Caso haja alguma dúvida ou preocupação em relação à política de
            privacidade, as usuárias podem entrar em contato com a equipe de
            suporte através do e-mail contato@fitsister.com.
          </p>
          <p>
            A equipe está disponível para esclarecer dúvidas, receber feedback e
            garantir a segurança e privacidade das informações concedidas.
          </p>
        </div>
      </section>
      <Divider />
      <Footer />
    </>
  );
};
