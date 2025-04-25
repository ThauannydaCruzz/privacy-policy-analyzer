import React, { useState } from 'react';
import './Home.css'; 

function AnalyzePolicy() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [message, setMessage] = useState('');

  const handleAnalyze = (event) => {
    event.preventDefault(); 

    fetch('http://127.0.0.1:5000/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao analisar política');
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message || 'Análise realizada com sucesso!');
        setAnalysis(data.analysis);
      })
      .catch((error) => setMessage(error.message));
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Analisar Política</h1>
        <p>Insira os detalhes da política para realizar uma análise detalhada.</p>
      </header>
      <main className="home-main">
        <form onSubmit={handleAnalyze} className="policy-form">
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
          <button type="submit" className="home-button">Analisar</button>
        </form>
        {message && <p className="message">{message}</p>}
        {analysis && (
          <div className="analysis-result">
            <h3>Resultados da Análise:</h3>
            <p><strong>Título:</strong> {analysis.title}</p>
            <p><strong>Resumo:</strong> {analysis.summary}</p>
            <p><strong>Palavras-Chave Encontradas:</strong></p>
            <ul>
              {Object.entries(analysis.keyword_count).map(([keyword, count]) => (
                <li key={keyword}>{keyword}: {count}</li>
              ))}
            </ul>
            <p><strong>Pontuação:</strong> {analysis.score}</p>
            <p><strong>Recomendação:</strong> {analysis.recommendation}</p>
          </div>
        )}
      </main>
      <footer className="home-footer">
        <p>© 2025 Privacy Policy Analyzer. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default AnalyzePolicy;