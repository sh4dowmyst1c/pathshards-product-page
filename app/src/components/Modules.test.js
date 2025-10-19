import React from 'react';
import { render, screen } from '@testing-library/react';
import Modules from './Modules';

describe('Modules', () => {
  test('renders modules section title', () => {
    render(<Modules />);

    expect(screen.getByText('Conteúdo do Curso')).toBeInTheDocument();
  });

  test('renders all module titles', () => {
    render(<Modules />);

    expect(screen.getByText('Introdução ao Go e Ebiten')).toBeInTheDocument();
    expect(screen.getByText('Sintaxe Básica em Go')).toBeInTheDocument();
    expect(screen.getByText('Criando Janelas e Gráficos')).toBeInTheDocument();
    expect(screen.getByText('Animações e Sprites')).toBeInTheDocument();
    expect(screen.getByText('Física e Colisões')).toBeInTheDocument();
    expect(screen.getByText('Áudio e Efeitos Sonoros')).toBeInTheDocument();
  });

  test('renders module descriptions', () => {
    render(<Modules />);

    expect(screen.getByText('Instalação e primeiros passos com Go para jogos.')).toBeInTheDocument();
    expect(screen.getByText('Fundamentos da linguagem Go aplicada a jogos.')).toBeInTheDocument();
    expect(screen.getByText('Renderização básica com Ebiten.')).toBeInTheDocument();
    expect(screen.getByText('Adicione movimento aos seus jogos.')).toBeInTheDocument();
    expect(screen.getByText('Implemente interações realistas.')).toBeInTheDocument();
    expect(screen.getByText('Integre sons para melhor experiência.')).toBeInTheDocument();
  });

  test('renders correct number of modules', () => {
    render(<Modules />);

    const modules = screen.getAllByRole('heading', { level: 4 });
    expect(modules).toHaveLength(6);
  });
});
