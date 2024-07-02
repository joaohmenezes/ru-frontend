import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sobre.css';

function Sobre() {
  return (
    <div>
      <Helmet>
        <title>Sobre o Restaurante Universitário</title>
        <meta name="description" content="Saiba mais sobre o Restaurante Universitário da UNIFEI, incluindo como funciona, nosso compromisso com a qualidade e horários de funcionamento." />
        <meta name="keywords" content="Restaurante Universitário, UNIFEI, refeições, cardápio, almoço, universidade" />
      </Helmet>
      <div className="banner-image">
        <div className="banner-text">
          <h1>Sobre o Restaurante Universitário</h1>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title">Bem-vindo ao site do RU UNIFEI</h2>
                <p className="card-text">
                  Este site foi criado para facilitar o acesso às informações sobre as refeições servidas
                  no Restaurante Universitário. Aqui você encontrará o cardápio diário e poderá consultar as
                  refeições dos dias anteriores.
                </p>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title">Como funciona?</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Página Inicial:</strong> Mostra a refeição do dia atual e o histórico das refeições passadas.</li>
                  <li className="list-group-item"><strong>Atualização Diária:</strong> O cardápio é atualizado diariamente pelas nossas cozinheiras</li>
                  <li className="list-group-item"><strong>Refeições Passadas:</strong> Você pode consultar as refeições servidas nos dias anteriores.</li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title">Nosso Compromisso</h2>
                <p className="card-text">
                  Estamos comprometidos em fornecer refeições nutritivas e saborosas para os universitários (e as vezes virose). 
                  Nosso cardápio é planejado cuidadosamente para atender às necessidades
                  nutricionais dos estudantes, funcionários e professores.
                </p>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title">Proibido</h2>
                <p className="card-text">
                  Entrar usando roupas de banho.  
                  Animais em geral , principalmente o CHICO , sujeito a pontapés e xingos.
                  Ser da vigilancia sanitária , também sujeito a pontapés.
                </p>
              </div>
            </div>
-------------------------------
            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title">Horário de Funcionamento</h2>
                <p className="card-text">
                  Segunda a Sexta: 11:00 - 14:00 Almoço <br />
                  <br />
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
