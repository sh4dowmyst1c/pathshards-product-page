import React from 'react';
import { render, screen } from '@testing-library/react';
import Instructor from './Instructor';

describe('Instructor', () => {
  test('renders instructor section title', () => {
    render(<Instructor />);

    expect(screen.getByText('Sobre o Instrutor')).toBeInTheDocument();
  });

  test('renders instructor name', () => {
    render(<Instructor />);

    expect(screen.getByText('EuCoder123')).toBeInTheDocument();
  });

  test('renders instructor title', () => {
    render(<Instructor />);

    expect(screen.getByText('Desenvolvedor de Jogos & Especialista em Go')).toBeInTheDocument();
  });

  test('renders instructor description', () => {
    render(<Instructor />);

    expect(screen.getByText(/Com 5 anos de experiência/)).toBeInTheDocument();
    expect(screen.getByText(/já criei jogos publicados/)).toBeInTheDocument();
  });

  test('renders instructor stats', () => {
    render(<Instructor />);

    expect(screen.getByText('🎮 10+ Jogos Criados')).toBeInTheDocument();
    expect(screen.getByText('👥 500+ Alunos')).toBeInTheDocument();
    expect(screen.getByText('⭐ 4.9/5 Avaliação')).toBeInTheDocument();
  });

  test('renders instructor image', () => {
    render(<Instructor />);

    const image = screen.getByAltText('Instrutor EuCoder123');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('instructor.jpg'));
  });
});
