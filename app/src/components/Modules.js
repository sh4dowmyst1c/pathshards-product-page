import React from 'react';
import '../App.css';

function Modules() {
  return (
    <section className="modules">
      <h3>Conteúdo do Curso</h3>
      <div className="modules-grid">
        <div className="module">
          <h4>Introdução ao Go e Ebiten</h4>
          <p>Instalação e primeiros passos com Go para jogos.</p>
        </div>
        <div className="module">
          <h4>Sintaxe Básica em Go</h4>
          <p>Fundamentos da linguagem Go aplicada a jogos.</p>
        </div>
        <div className="module">
          <h4>Criando Janelas e Gráficos</h4>
          <p>Renderização básica com Ebiten.</p>
        </div>
        <div className="module">
          <h4>Animações e Sprites</h4>
          <p>Adicione movimento aos seus jogos.</p>
        </div>
        <div className="module">
          <h4>Física e Colisões</h4>
          <p>Implemente interações realistas.</p>
        </div>
        <div className="module">
          <h4>Áudio e Efeitos Sonoros</h4>
          <p>Integre sons para melhor experiência.</p>
        </div>
      </div>
    </section>
  );
}

export default Modules;
