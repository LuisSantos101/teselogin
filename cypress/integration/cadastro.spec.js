/// <reference types="cypress" />
import type from '../support/pages'

describe('Cadastrar Novo Usuário', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    });

    it('realizar cadastro', () => {
       type.criarCadastro()
    });
});

