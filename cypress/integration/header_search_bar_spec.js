/// <reference types="cypress" />

const fetchMock = require('../mocks/fetch');
const soupMeals = require('../mocks/soupMeals');
const ginDrinks = require('../mocks/ginDrinks');
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Todos os elementos devem respeitar os atributos descritos no protótipo para a barra de busca', () => {
  it('Tem os data-testids tanto da barra de busca quanto de todos os radio-buttons', () => {
    cy.visit('http://localhost:3000/comidas');

    cy.get('[data-testid="search-top-btn"]').click();

    cy.get('[data-testid="search-input"]');
    cy.get('[data-testid="ingredient-search-radio"]');
    cy.get('[data-testid="name-search-radio"]');
    cy.get('[data-testid="first-letter-search-radio"]');
    cy.get('[data-testid="exec-search-btn"]');
  });
});

describe('A barra de busca deve ficar logo abaixo do header e deve possuir 3 radio buttons: Ingrediente, Nome e Primeira letra. Eles devem mudar a forma como serão filtradas as receitas', () => {
  it('Se o radio selecionado for Ingrediente, a busca na API é feita corretamente pelo ingrediente', () => {
    cy.visit('http://localhost:3000/comidas', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });

    cy.get('[data-testid="search-top-btn"]').click();
    cy.get('[data-testid="ingredient-search-radio"]').click();
    cy.get('[data-testid="search-input"]').type('chicken');
    cy.get('[data-testid="exec-search-btn"]').click();
    cy.window()
      .its('fetch')
      .should('be.calledWith', 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken');
  });

  it('Se o radio selecionado for Nome, a busca na API é feita corretamente pelo nome', () => {
    cy.visit('http://localhost:3000/comidas', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });

    cy.get('[data-testid="search-top-btn"]').click();
    cy.get('[data-testid="name-search-radio"]').click();
    cy.get('[data-testid="search-input"]').type('soup');
    cy.get('[data-testid="exec-search-btn"]').click();
    cy.window()
      .its('fetch')
      .should('be.calledWith', 'https://www.themealdb.com/api/json/v1/1/search.php?s=soup');
  });

  it('Se o radio selecionado for Primeira letra, a busca na API é feita corretamente pelo primeira letra', () => {
    cy.visit('http://localhost:3000/comidas', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });

    cy.get('[data-testid="search-top-btn"]').click();
    cy.get('[data-testid="first-letter-search-radio"]').click();
    cy.get('[data-testid="search-input"]').type('a');
    cy.get('[data-testid="exec-search-btn"]').click();
    cy.window()
      .its('fetch')
      .should('be.calledWith', 'https://www.themealdb.com/api/json/v1/1/search.php?f=a');
  });

  it('Se o radio selecionado for Primeira letra e a busca na API for feita com mais de uma letra, deve-se exibir um alert', () => {
    cy.visit('http://localhost:3000/comidas', {
      onBeforeLoad(win) {
        cy.spy(win, 'alert');
      },
    });

    cy.get('[data-testid="search-top-btn"]').click();
    cy.get('[data-testid="first-letter-search-radio"]').click();
    cy.get('[data-testid="search-input"]').type('aaa');
    cy.get('[data-testid="exec-search-btn"]').click();
    cy.window()
      .its('alert')
      .should('be.calledWith', 'Sua busca deve conter somente 1 (um) caracter');
  });
});

describe('A busca deve ocorrer na API de comidas caso a pessoa esteja na página de comidas e na de bebidas caso esteja na de bebidas', () => {
  it('Na tela de bebidas, se o radio selecionado for Ingrediente, a busca na API é feita corretamente pelo ingrediente', () => {
    cy.visit('http://localhost:3000/bebidas', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });

    cy.get('[data-testid="search-top-btn"]').click();
    cy.get('[data-testid="ingredient-search-radio"]').click();
    cy.get('[data-testid="search-input"]').type('lemon');
    cy.get('[data-testid="exec-search-btn"]').click();
    cy.window()
      .its('fetch')
      .should('be.calledWith', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon');
  });

  it('Na tela de bebidas, se o radio selecionado for Nome, a busca na API é feita corretamente pelo nome', () => {
    cy.visit('http://localhost:3000/bebidas', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });

    cy.get('[data-testid="search-top-btn"]').click();
    cy.get('[data-testid="name-search-radio"]').click();
    cy.get('[data-testid="search-input"]').type('gin');
    cy.get('[data-testid="exec-search-btn"]').click();
    cy.window()
      .its('fetch')
      .should('be.calledWith', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin');
  });

  it('Na tela de bebidas, se o radio selecionado for Primeira letra, a busca na API é feita corretamente pelo primeira letra', () => {
    cy.visit('http://localhost:3000/bebidas', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });

    cy.get('[data-testid="search-top-btn"]').click();
    cy.get('[data-testid="first-letter-search-radio"]').click();
    cy.get('[data-testid="search-input"]').type('a');
    cy.get('[data-testid="exec-search-btn"]').click();
    cy.window()
      .its('fetch')
      .should('be.calledWith', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
  });

  it('Na tela de bebidas, se o radio selecionado for Primeira letra e a busca na API for feita com mais de uma letra, deve-se exibir um alert', () => {
    cy.visit('http://localhost:3000/bebidas', {
      onBeforeLoad(win) {
        cy.spy(win, 'alert');
      },
    });

    cy.get('[data-testid="search-top-btn"]').click();
    cy.get('[data-testid="first-letter-search-radio"]').click();
    cy.get('[data-testid="search-input"]').type('aaa');
    cy.get('[data-testid="exec-search-btn"]').click();
    cy.window()
      .its('alert')
      .should('be.calledWith', 'Sua busca deve conter somente 1 (um) caracter');
  });
});

describe('Caso apenas uma receita seja encontrada, a rota deve mudar para a tela de detalhes da receita com o ID da mesma na URL', () => {
  it('Caso apenas uma comida seja encontrada, deve-se ir para sua rota de detalhes', () => {
    cy.visit('http://localhost:3000/comidas', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="search-top-btn"]').click();
    cy.get('[data-testid="name-search-radio"]').click();
    cy.get('[data-testid="search-input"]').type('Arrabiata');
    cy.get('[data-testid="exec-search-btn"]').click();

    cy.location().should((loc) => expect(loc.pathname).to.eq('/comidas/52771'));
  });

  it('Caso apenas uma bebida seja encontrada, deve-se ir para sua rota de detalhes', () => {
    cy.visit('http://localhost:3000/bebidas', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="search-top-btn"]').click();
    cy.get('[data-testid="name-search-radio"]').click();
    cy.get('[data-testid="search-input"]').type('Aquamarine');
    cy.get('[data-testid="exec-search-btn"]').click();

    cy.location().should((loc) => expect(loc.pathname).to.eq('/bebidas/178319'));
  });
});

describe('Caso mais de uma receita seja encontrada, mostrar as receitas em cards da mesma maneira que a tela principal de receitas', () => {
  it('Caso mais de uma comida seja encontrada, mostrar as 12 primeiras', () => {
    cy.visit('http://localhost:3000/comidas', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="search-top-btn"]').click();
    cy.get('[data-testid="name-search-radio"]').click();
    cy.get('[data-testid="search-input"]').type('soup');
    cy.get('[data-testid="exec-search-btn"]').click();

    soupMeals.meals.forEach((meal, index) => {
      cy.get(`[data-testid="${index}-recipe-card"]`);

      cy.get(`[data-testid="${index}-card-img"]`)
        .should('have.attr', 'src')
        .should('include', meal['strMealThumb']);

      cy.get(`[data-testid="${index}-card-name"]`).contains(meal['strMeal']);
    });

    cy.get('[data-testid="10-recipe-card"]').should('not.exist');
    cy.get('[data-testid="10-card-img"]').should('not.exist');
    cy.get('[data-testid="10-card-name"]').should('not.exist');
  });

  it('Caso mais de uma bebida seja encontrada, mostrar as 12 primeiras', () => {
    cy.visit('http://localhost:3000/bebidas', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="search-top-btn"]').click();
    cy.get('[data-testid="name-search-radio"]').click();
    cy.get('[data-testid="search-input"]').type('gin');
    cy.get('[data-testid="exec-search-btn"]').click();

    ginDrinks.drinks.slice(0, 12).forEach((drink, index) => {
      cy.get(`[data-testid="${index}-recipe-card"]`);

      cy.get(`[data-testid="${index}-card-img"]`)
        .should('have.attr', 'src')
        .should('include', drink['strDrinkThumb']);

      cy.get(`[data-testid="${index}-card-name"]`).contains(drink['strDrink']);
    });

    cy.get('[data-testid="12-recipe-card"]').should('not.exist');
    cy.get('[data-testid="12-card-img"]').should('not.exist');
    cy.get('[data-testid="12-card-name"]').should('not.exist');
  });
});

describe('Caso nenhuma receita seja encontrada, um alert contendo o texto "Sinto muito, não encontramos nenhuma receita para esses filtros." deve ser exibido', () => {
  it('Caso nenhuma comida seja encontrada o alert deve ser exibido', () => {
    cy.visit('http://localhost:3000/comidas', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
        cy.spy(win, 'alert');
      },
    });

    cy.get('[data-testid="search-top-btn"]').click();
    cy.get('[data-testid="name-search-radio"]').click();
    cy.get('[data-testid="search-input"]').type('xablau');
    cy.get('[data-testid="exec-search-btn"]').click();

    cy.window()
      .its('alert')
      .should('be.calledWith', 'Sinto muito, não encontramos nenhuma receita para esses filtros.');
  });

  it('Caso nenhuma bebida seja encontrada o alert deve ser exibido', () => {
    cy.visit('http://localhost:3000/bebidas', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
        cy.spy(win, 'alert');
      },
    });

    cy.get('[data-testid="search-top-btn"]').click();
    cy.get('[data-testid="name-search-radio"]').click();
    cy.get('[data-testid="search-input"]').type('xablau');
    cy.get('[data-testid="exec-search-btn"]').click();

    cy.window()
      .its('alert')
      .should('be.calledWith', 'Sinto muito, não encontramos nenhuma receita para esses filtros.');
  });
});
