import React, { useState } from 'react';
import './Home.css'; 
function CreatePolicy() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://127.0.0.1:5000/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao criar política');
        }
        return response.json();
      })
      .then((data) => setMessage(data.message || 'Política criada com sucesso!'))
      .catch((error) => setMessage(error.message));
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Criar Nova Política</h1>
        <p>Preencha os campos abaixo para criar uma nova política de privacidade.</p>
      </header>
      <main className="home-main">
        <form onSubmit={handleSubmit} className="policy-form">
          <div className="form-group">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="home-button">Criar</button>
        </form>
        {message && <p className="message">{message}</p>}
      </main>
      <footer className="home-footer">
        <p>© 2025 Privacy Policy Analyzer. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default CreatePolicy;