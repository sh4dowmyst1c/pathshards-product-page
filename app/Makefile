
install:
	npm install

test:
	npm test -- --watchAll=false --passWithNoTests

cover:
	npm run coverage

lint:
	npm run lint

build:
	npm run build

clean:
	rm -rf node_modules build coverage

validate: install lint cover build
