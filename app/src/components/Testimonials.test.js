import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';

describe('Testimonials', () => {
  test('renders testimonials section title', () => {
    render(<Testimonials />);

    expect(screen.getByText('Depoimentos de Alunos')).toBeInTheDocument();
  });

  test('renders testimonial text', () => {
    render(<Testimonials />);

    expect(screen.getByText('"Criei meu primeiro jogo em Go rapidamente. Recomendo!"')).toBeInTheDocument();
  });

  test('renders testimonial author', () => {
    render(<Testimonials />);

    expect(screen.getByText('- Maria Santos, Desenvolvedora')).toBeInTheDocument();
  });
});
