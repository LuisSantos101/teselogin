/// <reference types="cypress" />
import type from '../support/pages'

describe('Cadastro E-mail Inválido', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    });

    it('Cadastrar com E-mail Inválido', () => {
        type.cadastroEmailInvalido()
    });
});

