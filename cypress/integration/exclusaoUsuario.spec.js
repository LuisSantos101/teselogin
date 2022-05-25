/// <reference types="cypress" />
import type from '../support/pages'


describe('Exclusão de Cadastro', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    });

    it('Excluir um Cadastro', () => {
        type.excluirCadastro()               
    });
});
