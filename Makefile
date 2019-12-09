.PHONY: default install start test
MAKEFLAGS += --silent

.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install project's dependencies
	@echo "Install project deps"
	npm install

start: ## Start project
	@echo "Start the project"
	npm start

test: ## Launch the project's tests
	@echo "Launch the tests"
	npm test
