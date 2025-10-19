import React from 'react';
import '../App.css';

function Instructor() {
  return (
    <section className="instructor">
      <h3>Sobre o Instrutor</h3>
      <div className="instructor-card">
        <img src={`${process.env.PUBLIC_URL}/images/instructor.jpg`} alt="Instrutor EuCoder123" />
        <div className="instructor-info">
          <h4>EuCoder123</h4>
          <p className="instructor-title">Desenvolvedor de Jogos & Especialista em Go</p>
          <p>Com 5 anos de experiência, já criei jogos publicados na itch.io e Steam. Apaixonado por ensinar Go e Ebiten de forma prática.</p>
          <div className="instructor-stats">
            <span>🎮 10+ Jogos Criados</span>
            <span>👥 500+ Alunos</span>
            <span>⭐ 4.9/5 Avaliação</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructor;
