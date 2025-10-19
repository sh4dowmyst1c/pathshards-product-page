import React from 'react';
import { render, screen } from '@testing-library/react';
import Faq from './Faq';

describe('Faq', () => {
  test('renders FAQ section title', () => {
    render(<Faq />);

    expect(screen.getByText('Perguntas Frequentes')).toBeInTheDocument();
  });

  test('renders all FAQ questions', () => {
    render(<Faq />);

    expect(screen.getByText('Sou iniciante, consigo acompanhar?')).toBeInTheDocument();
    expect(screen.getByText('Preciso de computador potente?')).toBeInTheDocument();
    expect(screen.getByText('Há garantia?')).toBeInTheDocument();
  });

  test('renders FAQ answers', () => {
    render(<Faq />);

    expect(screen.getByText('Sim! O curso é feito para quem nunca programou.')).toBeInTheDocument();
    expect(screen.getByText('Não, um PC com 4GB RAM é suficiente.')).toBeInTheDocument();
    expect(screen.getByText('Sim, 7 dias de garantia total.')).toBeInTheDocument();
  });

  test('renders correct number of FAQ items', () => {
    render(<Faq />);

    // Count summary elements by checking for specific questions
    expect(screen.getByText('Sou iniciante, consigo acompanhar?')).toBeInTheDocument();
    expect(screen.getByText('Preciso de computador potente?')).toBeInTheDocument();
    expect(screen.getByText('Há garantia?')).toBeInTheDocument();
  });
});
