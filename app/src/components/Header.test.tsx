import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders header with title and subtitle', () => {
    render(<Header />);

    expect(screen.getByText('Curso Go e Ebiten')).toBeInTheDocument();
    expect(screen.getByText('Aprenda a criar jogos')).toBeInTheDocument();
  });

  test('renders header with correct structure', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Aprenda a criar jogos')).toBeInTheDocument();
  });
});
