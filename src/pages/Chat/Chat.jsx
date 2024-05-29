import "./Chat.css";
import { IoIosSend } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import parceira3Laura from "/src/assets/image/usuarias/parceira3Laura.png";
import logo from "/src/assets/image/logoBranco.png";
import React, { useState } from 'react';
import { DiVim } from "react-icons/di";


export const Chat = () => {

  const[messages,setMessages] = useState([
    // { sender: 'me', text: 'Opa, boa noite!' },
    // { sender: 'me', text: 'Você está bem?' },
    // { sender: 'me', text: 'Queria saber se vai treinar lá na academia esse sábado...' },
    { sender: 'Laura', text: 'Oi, boa noite!' },
    // { sender: 'Laura', text: 'Já ia falar sobre isso mesmo, eu vou sim. Amanhã nós marcamos direitinho.' },
    // { sender: 'me', text: 'Que ótimo então, estou bem também. Eu vou pela manhã.' },
    // { sender: 'Laura', text: 'Vou chamar a Bea também.' },
    // { sender: 'me', text: 'Tá ótimo, Laura! Chama mesmo, vai ser massa demais' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      setMessages([...messages, { sender: 'me', text: newMessage }]);
      setNewMessage('');
    }
  };
  
  return (
    <>
      <header>
        <img
          src={logo}
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
      
    <div className="fundo">
      <div className="informacaopessoal">
          <img src={parceira3Laura} alt="mulher" className="imagem_Parceira"/>
          <div>
            <h2>Laura, 34</h2>
            <h3>Online</h3>
            <a href="">
            <h3>Tornar Fit Sister</h3>
            </a>
          </div>
      </div>
    </div>

      <section className="container">
    
        <div className="chat1">
      
            <section className="chat_mensagens">
               {messages.map((message, index) => (
                <div
                  key={index}
                  className={message.sender === 'me' ? 'my_message' : 'message_other'}
                >
                  {message.sender !== 'me' && (
                    <span className="message_sender">{message.sender}</span>
                  )}
                  {message.text}
                </div>
              ))}
            </section> 
          
           
            <form className="chat_form" onSubmit={handleSendMessage}>

              <button className="button_location">
              <IoLocationSharp /> 
              </button>
              <button className="button_emoji">
              <MdEmojiEmotions />
              </button>

                <input type="text" className="chat_input" placeholder="Digite aqui..." 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)
                }required/>

                <button className="button_send">
                  <IoIosSend />
                </button>

            </form>
          </div>
      </section> 
    </>
  );
};