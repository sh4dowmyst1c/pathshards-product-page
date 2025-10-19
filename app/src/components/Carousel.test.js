import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel', () => {
  const defaultProps = {
    currentSlide: 0,
    setCurrentSlide: jest.fn(),
    nextSlide: jest.fn(),
    prevSlide: jest.fn(),
  };

  test('renders carousel with title', () => {
    render(<Carousel {...defaultProps} />);

    expect(screen.getByText('Jogos Criados por Alunos')).toBeInTheDocument();
  });

  test('renders carousel slides', () => {
    render(<Carousel {...defaultProps} />);

    expect(screen.getByAltText('Jogo 1')).toBeInTheDocument();
    expect(screen.getByAltText('Jogo 2')).toBeInTheDocument();
    expect(screen.getByAltText('Jogo 3')).toBeInTheDocument();
    expect(screen.getByAltText('Jogo 4')).toBeInTheDocument();
  });

  test('renders slide descriptions', () => {
    render(<Carousel {...defaultProps} />);

    expect(screen.getByText('Plataforma 2D criada em Go')).toBeInTheDocument();
    expect(screen.getByText('Puzzle game interativo')).toBeInTheDocument();
    expect(screen.getByText('Ação com física avançada')).toBeInTheDocument();
    expect(screen.getByText('Jogo multiplayer básico')).toBeInTheDocument();
  });

  test('renders navigation buttons', () => {
    render(<Carousel {...defaultProps} />);

    const prevButton = screen.getByText('‹');
    const nextButton = screen.getByText('›');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test('calls nextSlide when next button is clicked', () => {
    render(<Carousel {...defaultProps} />);

    const nextButton = screen.getByText('›');
    fireEvent.click(nextButton);

    expect(defaultProps.nextSlide).toHaveBeenCalledTimes(1);
  });

  test('calls prevSlide when previous button is clicked', () => {
    render(<Carousel {...defaultProps} />);

    const prevButton = screen.getByText('‹');
    fireEvent.click(prevButton);

    expect(defaultProps.prevSlide).toHaveBeenCalledTimes(1);
  });
});
