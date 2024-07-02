import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 

function Home() {
  const [refeicaoDoDia, setRefeicaoDoDia] = useState(null);
  const [refeicoesPassadas, setRefeicoesPassadas] = useState([]);

  useEffect(() => {
    fetchRefeicoes();
  }, []);

  const url = "https://ru-backend.vercel.app";

  const fetchRefeicoes = async () => {
    try {
      console.log('Fetching refeição atual');
      const resAtual = await axios.get(url + '/api/refeicoes/atual');
      console.log('Refeição atual:', resAtual.data);

      console.log('Fetching refeições passadas');
      const resPassadas = await axios.get(url + '/api/refeicoes/passadas');
      console.log('Refeições passadas:', resPassadas.data);

      setRefeicaoDoDia(resAtual.data);
      setRefeicoesPassadas(resPassadas.data);
    } catch (error) {
      console.error('Erro ao buscar refeições:', error);
    }
  };

  return (
    <div>
      <div className="banner-image">
        <div className="banner-text">
          <h1>Restaurante Universitário</h1>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h2 className="mb-0">Refeição do Dia</h2>
              </div>
              <div className="card-body">
                {refeicaoDoDia ? (
                  <div>
                    <h3 className="card-title">{refeicaoDoDia.nome}</h3>
                    <p className="card-text">{refeicaoDoDia.descricao}</p>
                  </div>
                ) : (
                  <p className="card-text">Carregando refeição do dia...</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-secondary text-white">
                <h2 className="mb-0">Refeições Passadas</h2>
              </div>
              <div className="card-body">
                {refeicoesPassadas.length > 0 ? (
                  <ul className="list-group list-group-flush">
                    {refeicoesPassadas.map((refeicao) => (
                      <li key={refeicao.id} className="list-group-item">
                        <h3 className="mb-2">{refeicao.nome}</h3>
                        <p className="mb-1">{refeicao.descricao}</p>
                        <small className="text-muted">
                          Data: {new Date(refeicao.data).toLocaleDateString()}
                        </small>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="card-text">Carregando refeições passadas...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
