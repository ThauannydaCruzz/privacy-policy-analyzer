import React, { useEffect, useState } from 'react';
import './Home.css'; 

function PoliciesList() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/policies')
      .then((response) => response.json())
      .then((data) => setPolicies(data))
      .catch((error) => console.error('Erro ao carregar políticas:', error));
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Políticas de Privacidade</h1>
        <p>Veja todas as políticas disponíveis.</p>
      </header>
      <main className="home-main">
        <ul className="policies-list">
          {policies.map((policy, index) => (
            <li key={index} className="policy-item">
              <h3>{policy.title}</h3>
              <p>{policy.description}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer className="home-footer">
        <p>© 2025 Privacy Policy Analyzer. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default PoliciesList;