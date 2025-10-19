import React from 'react';
import '../App.css';

function Benefits() {
  return (
    <section className="benefits">
      <h3>Por Que Escolher Este Curso?</h3>
      <div className="benefits-grid">
        <div className="benefit">
          <h4>Go para Jogos</h4>
          <p>Aprenda uma linguagem eficiente e moderna para desenvolvimento de jogos.</p>
        </div>
        <div className="benefit">
          <h4>Projetos Práticos</h4>
          <p>15 aulas com exercícios reais para criar jogos do zero.</p>
        </div>
        <div className="benefit">
          <h4>Suporte Direto</h4>
          <p>Contato com instrutor para tirar dúvidas.</p>
        </div>
        <div className="benefit">
          <h4>Acesso Vitalício</h4>
          <p>Conteúdo sempre disponível, com atualizações.</p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
