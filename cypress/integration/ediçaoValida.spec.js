/// <reference types="cypress" />
import type from '../support/pages'


describe('Edição Cadastro válida', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    });

    it('Edição Cadastro válida', () => {
        type.editarCadastro()               
    });
});
