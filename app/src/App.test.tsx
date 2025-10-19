import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the main application', () => {
    render(<App />);

    // Check if main sections are rendered
    expect(screen.getByText('Curso Go e Ebiten')).toBeInTheDocument();
    expect(screen.getByText('Crie Jogos com Go e Ebiten')).toBeInTheDocument();
    expect(screen.getByText('Jogos Criados por Alunos')).toBeInTheDocument();
    expect(screen.getByText('Conteúdo do Curso')).toBeInTheDocument();
    expect(screen.getByText('Por Que Escolher Este Curso?')).toBeInTheDocument();
    expect(screen.getByText('Sobre o Instrutor')).toBeInTheDocument();
    expect(screen.getByText('Bônus Exclusivos')).toBeInTheDocument();
    expect(screen.getByText('Depoimentos de Alunos')).toBeInTheDocument();
    expect(screen.getByText('Perguntas Frequentes')).toBeInTheDocument();
  });

  test('renders footer', () => {
    render(<App />);

    expect(screen.getByText('© 2025 PathShards. Todos os direitos reservados.')).toBeInTheDocument();
  });

  test('renders promo video section', () => {
    render(<App />);

    // Check if the video section exists by looking for surrounding elements
    expect(screen.getByText('Seu navegador não suporta o elemento de vídeo.')).toBeInTheDocument();
  });

  test('initializes carousel state correctly', () => {
    render(<App />);

    // Check if carousel buttons are present
    expect(screen.getByText('‹')).toBeInTheDocument();
    expect(screen.getByText('›')).toBeInTheDocument();
  });

  test('nextSlide button advances the carousel', () => {
    render(<App />);
    
    const nextButton = screen.getByText('›');
    const slidesContainer = screen.getByTestId('carousel-slides');
    
    // Initial state: transform should be translateX(-0%)
    expect(slidesContainer).toHaveStyle('transform: translateX(-0%)');
    
    // Click next button
    fireEvent.click(nextButton);
    
    // After click: transform should be translateX(-100%)
    expect(slidesContainer).toHaveStyle('transform: translateX(-100%)');
  });

  test('prevSlide button goes back in the carousel', () => {
    render(<App />);
    
    const prevButton = screen.getByText('‹');
    const slidesContainer = screen.getByTestId('carousel-slides');
    
    // Initial state: transform should be translateX(-0%)
    expect(slidesContainer).toHaveStyle('transform: translateX(-0%)');
    
    // Click prev button
    fireEvent.click(prevButton);
    
    // After click: transform should be translateX(-300%) (since (0-1+4)%4 = 3)
    expect(slidesContainer).toHaveStyle('transform: translateX(-300%)');
  });
});
