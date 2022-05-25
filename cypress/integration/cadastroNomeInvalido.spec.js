/// <reference types="cypress" />
import type from '../support/pages'

describe('Cadastro Nome Inválido', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    });

    it('Cadastrar com Nome Inválido', () => {
        type.cadastroNomeInvalido ()
    });
});

