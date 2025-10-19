import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  test('renders hero section with main title', () => {
    render(<Hero />);

    expect(screen.getByText('Crie Jogos com Go e Ebiten')).toBeInTheDocument();
  });

  test('renders hero features list', () => {
    render(<Hero />);

    expect(screen.getByText('✅ 15 módulos práticos para jogos')).toBeInTheDocument();
    expect(screen.getByText('✅ Projetos completos em Go')).toBeInTheDocument();
    expect(screen.getByText('✅ Física, áudio e animações')).toBeInTheDocument();
    expect(screen.getByText('✅ Certificado de conclusão')).toBeInTheDocument();
  });

  test('renders pricing information', () => {
    render(<Hero />);

    expect(screen.getByText('R$ 79,90')).toBeInTheDocument();
    expect(screen.getByText('R$ 149,90')).toBeInTheDocument();
  });

  test('renders call-to-action button', () => {
    render(<Hero />);

    const button = screen.getByText('Inscreva-se Agora');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('cta-button');
  });

  test('renders hero image', () => {
    render(<Hero />);

    const image = screen.getByAltText('Curso de Jogos com Go e Ebiten');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('course.jpg'));
  });
});
