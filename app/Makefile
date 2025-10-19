# Instala as dependências do projeto
install:
	npm install

# Executa os testes em modo headless (sem watch), passando se não houver testes
test:
	npm test -- --watchAll=false --passWithNoTests

# Faz o build da aplicação para produção
build:
	npm run build

# Remove node_modules e pasta build para limpeza
clean:
	rm -rf node_modules build

# Validação completa: instala, testa e builda
validate: install test build
