/// <reference types="cypress" />

import "../support/qateste"

describe('Cadastrar Novo Usuário', () => {

   beforeEach(() => {
      cy.visit(Cypress.env('url'));
   });

   it('Cadastrar com Nome Inválido', () => {
      cy.nomeInvalido ()
   });

   it('Cadastrar com E-mail Inválido', () => {
      cy.emailInvalido()
   });

   it('Cadastrar com Senha Inválida', () => {
      cy.senhaInvalida()
   });
   
   it('Realizar Cadastro Válido', () => {
       cy.criarCadastro()
   });

   it('Edição de Cadastro Inválido', () => {
      cy.editarCadastroInvalido()              
   });

   it('Edição de Cadastro Válida', () => {
      cy.editarCadastro()               
   });

   it('Excluir um Cadastro', () => {
      cy.excluirCadastro()               
   });
});

