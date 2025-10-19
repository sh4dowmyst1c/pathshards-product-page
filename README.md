# Página de Produto - Curso de Go e Ebiten

Este projeto é uma landing page profissional desenvolvida em React com TypeScript para promover o curso "Crie Jogos com Go e Ebiten". A página apresenta uma interface moderna com tema escuro, destacando os benefícios, módulos, instrutor e depoimentos do curso, com o objetivo de converter visitantes em alunos.

## Sobre o Projeto

A landing page foi criada para o curso de desenvolvimento de jogos 2D utilizando a linguagem Go e a biblioteca Ebiten. Inclui seções interativas como um carrossel de jogos criados por alunos, vídeo promocional, informações sobre módulos, benefícios, perfil do instrutor e muito mais. O design é responsivo e otimizado para conversão.

### Funcionalidades Principais

- **Cabeçalho**: Título e subtítulo do curso.
- **Carrossel de Jogos**: Exibe exemplos de jogos criados por alunos, com navegação manual.
- **Seção Hero**: Apresentação do curso com preço e call-to-action.
- **Vídeo Promocional**: Vídeo demonstrativo do curso.
- **Módulos do Curso**: Lista detalhada dos conteúdos abordados.
- **Benefícios**: Destaques dos pontos positivos do curso.
- **Sobre o Instrutor**: Perfil de Alex Silva, especialista em Go e jogos.
- **Bônus Exclusivos**: Conteúdos adicionais oferecidos.
- **Depoimentos**: Avaliações de alunos.
- **Perguntas Frequentes**: FAQ para esclarecer dúvidas.
- **Rodapé**: Informações de copyright.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **CSS**: Estilização com tema escuro e responsivo.
- **Jest**: Framework de testes com suporte a TypeScript.
- **ESLint**: Ferramenta de linting para manter a qualidade do código.
- **React Scripts**: Ferramentas de build e desenvolvimento para React.
- **Node.js**: Ambiente de execução para desenvolvimento.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm

## Como Executar

1. Clone este repositório:
   ```
   git clone https://github.com/sh4dowmyst1c/pathshards-product-page.git
   ```

2. Navegue até a pasta do projeto:
   ```
   cd pathshards-product-page/app
   ```

3. Instale as dependências:
   ```
   make install
   # ou npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```

5. Abra o navegador em `http://localhost:3000` para visualizar a página.

## Testes e Qualidade de Código

O projeto inclui uma suíte completa de testes e ferramentas de qualidade:

- **Testes**: Execute `make test` ou `npm test` para rodar os testes com Jest.
- **Cobertura**: Execute `make cover` ou `npm run coverage` para gerar relatório de cobertura (HTML em `coverage/index.html`).
- **Linting**: Execute `make lint` ou `npm run lint` para verificar a qualidade do código.
- **Validação Completa**: Execute `make validate` para rodar install, lint, test, cover e build em sequência.

## Deploy

A aplicação está disponível online em: [https://sh4dowmyst1c.github.io/pathshards-product-page/](https://sh4dowmyst1c.github.io/pathshards-product-page/)

O deploy é feito automaticamente via GitHub Actions para GitHub Pages sempre que há push na branch `master`.

## Build para Produção

Para gerar uma versão otimizada para produção:

```
make build
# ou npm run build
```

Os arquivos serão gerados na pasta `build`.

## Estrutura do Projeto

```
app/
├── public/
│   ├── images/          # Imagens do carrossel, curso e instrutor
│   ├── videos/          # Vídeo promocional
│   └── index.html       # Arquivo HTML principal
├── src/
│   ├── components/      # Componentes React em TypeScript
│   │   ├── Benefits.tsx
│   │   ├── Bonuses.tsx
│   │   ├── Carousel.tsx
│   │   ├── Faq.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Instructor.tsx
│   │   ├── Modules.tsx
│   │   └── Testimonials.tsx
│   ├── App.tsx          # Componente principal da aplicação
│   ├── App.css          # Estilos da aplicação
│   ├── index.tsx        # Ponto de entrada do React
│   ├── index.css        # Estilos globais
│   ├── setupTests.ts    # Configuração dos testes
│   └── App.test.tsx     # Testes da aplicação
├── .babelrc             # Configuração do Babel
├── jest.config.js       # Configuração do Jest
├── tsconfig.json        # Configuração do TypeScript
└── package.json         # Dependências e scripts
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias.

## Licença

Este projeto é licenciado sob a MIT License. Consulte o arquivo LICENSE para mais detalhes.

## Contato

Para mais informações sobre o curso, visite [PathShards](https://pathshards.com) ou entre em contato conosco.

## Agradecimentos

Agradecemos a todos os alunos e colaboradores que tornaram este projeto possível.
