import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css';

//const url = "http://localhost:5000"
const url = "https://ru-backend.vercel.app";


function Admin() {
  const [refeicoes, setRefeicoes] = useState([]);
  const [novaRefeicao, setNovaRefeicao] = useState({ nome: '', descricao: '', data: '' });

  useEffect(() => {
    carregarRefeicoes();
  }, []);

  const carregarRefeicoes = async () => {
    try {
      const res = await axios.get(url + '/api/refeicoes');
      setRefeicoes(res.data);
    } catch (error) {
      console.error('Erro ao carregar refeições:', error);
    }
  };

  const handleInputChange = (e) => {
    setNovaRefeicao({ ...novaRefeicao, [e.target.name]: e.target.value });
  };

  const adicionarRefeicao = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url + '/api/refeicoes', novaRefeicao);
      setNovaRefeicao({ nome: '', descricao: '', data: '' });
      carregarRefeicoes();
    } catch (error) {
      console.error('Erro ao adicionar refeição:', error);
    }
  };

  const removerRefeicao = async (id) => {
    try {
      await axios.delete(url + `/api/refeicoes/${id}`);
      carregarRefeicoes();
    } catch (error) {
      console.error('Erro ao remover refeição:', error);
    }
  };

  return (
    <div>
      <div className="banner-image">
        <div className="banner-text">
          <h1>Administração do Restaurante Universitário</h1>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h2 className="mb-0">Adicionar Nova Refeição</h2>
              </div>
              <div className="card-body">
                <form onSubmit={adicionarRefeicao}>
                  <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      name="nome"
                      value={novaRefeicao.nome}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="descricao" className="form-label">Descrição:</label>
                    <textarea
                      className="form-control"
                      id="descricao"
                      name="descricao"
                      value={novaRefeicao.descricao}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="data" className="form-label">Data:</label>
                    <input
                      type="date"
                      className="form-control"
                      id="data"
                      name="data"
                      value={novaRefeicao.data}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Adicionar Refeição</button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-secondary text-white">
                <h2 className="mb-0">Refeições Cadastradas</h2>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {refeicoes.map((refeicao) => (
                    <li key={refeicao.id} className="list-group-item">
                      <h3>{refeicao.nome}</h3>
                      <p>{refeicao.descricao}</p>
                      <p>Data: {new Date(refeicao.data).toLocaleDateString()}</p>
                      <button className="btn btn-danger btn-sm" onClick={() => removerRefeicao(refeicao.id)}>Remover</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;