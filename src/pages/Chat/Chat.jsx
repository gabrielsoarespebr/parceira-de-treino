import "./Chat.css";
import { IoIosSend } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import parceira3Laura from "/src/assets/image/usuarias/parceira3Laura.png"


export const Chat = () => {
  return (
    <>
      <header>
        {/* <div className="marca">
          <img
            src="./src/assets/image/logoFundoTransparente.png"
            alt="logo"
            id="logoHeader"
          />
          <h1>Parceira de Treino</h1>
        </div> */}
      </header>

      <div className="fundo">
        <img src={parceira3Laura} alt="mulher" className="imagem_Parceira"/>
        {/* <h1>Laura, 34</h1>
        <h3>Online</h3>
        <h3>Tornar parceira de treino</h3> */}
        <table className="fundochat">
        
        </table>
      </div>

      <section className="container">

        <section className="chat"> 

          {/* <form className="container1"> */}

            <section className="chat_mensagens">
              
              <div className="my_message">Opa, boa noite!</div>
              <div className="my_message">Você está bem?</div>
              <div className="my_message">Queria saber se vai treinar lá na academia esse sábado...</div>

              <div className="message_other">
              <span className="message_sender">Laura</span>
              Boa noite! Estou bem, e você?</div>
              <div className="message_other"><span className="message_sender">Laura</span>
              Já ia falar sobre isso mesmo, eu vou sim.</div>

              <div className="my_message">
              Que ótimo então, estou bem também.
              Eu vou pela manhã, você também?</div>

              <div className="message_other"><span className="message_sender">Laura</span>
              Sim, 7h tá bom pra você? Vou chamar a Bea também.</div>

              <div className="my_message">Tá ótimo, Laura! Chama mesmo, vai ser massa demais</div>

              <div className="message_other"><span className="message_sender">Laura</span>
              sim, nos encontramos na esquina da minha rua e vamos juntas.</div>
              <div className="message_other"><span className="message_sender">Laura</span>
              Qualquer coisa fala, até amanhã.</div>

              <div className="my_message">Beleza, até amanhã.</div>

            </section> 
          {/* </form> */}
           
            <form className="chat_form">

              <button className="button_location">
              <IoLocationSharp /> 
              </button>
              <button className="button_emoji">
              <MdEmojiEmotions />
              </button>

                <input type="text" className="chat_input" placeholder="Digite aqui..." required/>

                <button className="button_send">
                  <IoIosSend />
                </button>

            </form>
          </section>
      </section>
  
    </>
  );
};