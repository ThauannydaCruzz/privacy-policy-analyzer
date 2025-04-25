import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Privacy Policy Analyzer</h1>
        <p>Gerencie, analise e crie políticas de privacidade de forma fácil e intuitiva.</p>
      </header>
      <main className="home-main">
        <div className="home-actions">
          <a href="/policies" className="home-button">📜 Ver Políticas</a>
          <a href="/create" className="home-button">➕ Criar Nova Política</a>
          <a href="/analyze" className="home-button">🔍 Analisar Política</a>
        </div>
      </main>
      <footer className="home-footer">
        <p>© 2025 Privacy Policy Analyzer. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;