/// <reference types="cypress" />
import type from '../support/pages'

describe('Cadastro Senha Inválida', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    });

    it('Cadastrar com Senha Inválida', () => {
        type.cadastroSenhaInvalida()
    });
});

