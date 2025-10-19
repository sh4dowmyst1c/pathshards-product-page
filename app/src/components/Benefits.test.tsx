import React from 'react';
import { render, screen } from '@testing-library/react';
import Benefits from './Benefits';

describe('Benefits', () => {
  test('renders benefits section title', () => {
    render(<Benefits />);

    expect(screen.getByText('Por Que Escolher Este Curso?')).toBeInTheDocument();
  });

  test('renders all benefit titles', () => {
    render(<Benefits />);

    expect(screen.getByText('Go para Jogos')).toBeInTheDocument();
    expect(screen.getByText('Projetos Práticos')).toBeInTheDocument();
    expect(screen.getByText('Suporte Direto')).toBeInTheDocument();
    expect(screen.getByText('Acesso Vitalício')).toBeInTheDocument();
  });

  test('renders benefit descriptions', () => {
    render(<Benefits />);

    expect(screen.getByText('Aprenda uma linguagem eficiente e moderna para desenvolvimento de jogos.')).toBeInTheDocument();
    expect(screen.getByText('15 aulas com exercícios reais para criar jogos do zero.')).toBeInTheDocument();
    expect(screen.getByText('Contato com instrutor para tirar dúvidas.')).toBeInTheDocument();
    expect(screen.getByText('Conteúdo sempre disponível, com atualizações.')).toBeInTheDocument();
  });

  test('renders correct number of benefits', () => {
    render(<Benefits />);

    const benefits = screen.getAllByRole('heading', { level: 4 });
    expect(benefits).toHaveLength(4);
  });
});
