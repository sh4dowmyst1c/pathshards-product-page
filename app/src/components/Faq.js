import React from 'react';
import '../App.css';

function Faq() {
  return (
    <section className="faq">
      <h3>Perguntas Frequentes</h3>
      <details>
        <summary>Sou iniciante, consigo acompanhar?</summary>
        <p>Sim! O curso é feito para quem nunca programou.</p>
      </details>
      <details>
        <summary>Preciso de computador potente?</summary>
        <p>Não, um PC com 4GB RAM é suficiente.</p>
      </details>
      <details>
        <summary>Há garantia?</summary>
        <p>Sim, 7 dias de garantia total.</p>
      </details>
    </section>
  );
}

export default Faq;
