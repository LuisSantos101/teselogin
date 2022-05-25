/// <reference types="cypress" />
import type from '../support/pages'


describe('Edição Cadastro Inválido', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    });

    it('Edição Cadastro Inválido', () => {
        type.editarCadastroInvalido()              
    });
});

