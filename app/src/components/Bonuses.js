import React from 'react';
import './Bonuses.css';

function Bonuses() {
  return (
    <section className="bonuses">
      <h3>Bônus Exclusivos</h3>
      <div className="bonuses-grid">
        <div className="bonus">
          <h4>Publicação de Jogos</h4>
          <p>Guia para publicar na itch.io e Steam.</p>
        </div>
        <div className="bonus">
          <h4>Multiplayer Básico</h4>
          <p>Adicione conectividade online.</p>
        </div>
        <div className="bonus">
          <h4>Comunidade Exclusiva</h4>
          <p>Acesso ao Discord para suporte.</p>
        </div>
      </div>
    </section>
  );
}

export default Bonuses;
