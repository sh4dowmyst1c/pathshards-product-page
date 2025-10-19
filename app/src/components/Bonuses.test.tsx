import React from 'react';
import { render, screen } from '@testing-library/react';
import Bonuses from './Bonuses';

describe('Bonuses', () => {
  test('renders bonuses section title', () => {
    render(<Bonuses />);

    expect(screen.getByText('Bônus Exclusivos')).toBeInTheDocument();
  });

  test('renders all bonus titles', () => {
    render(<Bonuses />);

    expect(screen.getByText('Publicação de Jogos')).toBeInTheDocument();
    expect(screen.getByText('Multiplayer Básico')).toBeInTheDocument();
    expect(screen.getByText('Comunidade Exclusiva')).toBeInTheDocument();
  });

  test('renders bonus descriptions', () => {
    render(<Bonuses />);

    expect(screen.getByText('Guia para publicar na itch.io e Steam.')).toBeInTheDocument();
    expect(screen.getByText('Adicione conectividade online.')).toBeInTheDocument();
    expect(screen.getByText('Acesso ao Discord para suporte.')).toBeInTheDocument();
  });

  test('renders correct number of bonuses', () => {
    render(<Bonuses />);

    const bonuses = screen.getAllByRole('heading', { level: 4 });
    expect(bonuses).toHaveLength(3);
  });
});
