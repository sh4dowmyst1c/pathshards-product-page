import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders footer with copyright text', () => {
    render(<Footer />);

    expect(screen.getByText('© 2025 PathShards. Todos os direitos reservados.')).toBeInTheDocument();
  });
});
