const el = require('./elements').ELEMENTS

class Type {

    criarCadastro () {
        cy.get(el.inserirNome).type(Cypress.env('nome'));
        cy.get(el.inserirEmail).type(Cypress.env('email'));;
        cy.get(el.inserirSenha).type(Cypress.env('password'));
        cy.get(el.btnCadastrar).click();
        cy.get(el.campoAlert).contains(Cypress.env('cadastroSucesso')).should('be.visible')
    }


    cadastroEmailInvalido () {
        cy.get(el.inserirNome).type(Cypress.env('nome'));
        cy.get(el.inserirEmail).type(Cypress.env('emailInvalido'));;
        cy.get(el.inserirSenha).type(Cypress.env('password'));
        cy.get(el.btnCadastrar).click()
    }


    cadastroNomeInvalido () {
        cy.get(el.inserirNome).type(Cypress.env('nomeInvalido'));
        cy.get(el.inserirEmail).type(Cypress.env('email'));;
        cy.get(el.inserirSenha).type(Cypress.env('password'));
        cy.get(el.btnCadastrar).click();
        cy.contains(Cypress.env('nmInvalido')).should('be.visible')
    }


    cadastroSenhaInvalida () {
        cy.get(el.inserirNome).type(Cypress.env('nome'));
        cy.get(el.inserirEmail).type(Cypress.env('email'));;
        cy.get(el.inserirSenha).type(Cypress.env('senhaInvalida'));
        cy.get(el.btnCadastrar).click();
        cy.contains(Cypress.env('pwInvalida')).should('be.visible')
    }


    editarCadastroInvalido () {
        cy.
        get(':nth-child(1) > .mt-5')
        .contains('george@gmail.com')
        .siblings()
        .children()
        .filter(':contains("Ações")')
        .click()
        .contains('Editar')
        .click({ force: true })

        cy.get("[value='George Lucas']").should('have.value', 'George Lucas')
        .clear()
        .type('George') 


        cy.get(el.btnSalvar).contains('Salvar').click({ force: true, multiple: true })
        //cy.get(el.btnSalvar).click()
        cy.wait(1500)

        cy.contains(Cypress.env('nmInvalido')).should('be.visible')

        cy.get("[value='george@gmail.com']").should('have.value', 'george@gmail.com')
        .clear()
        .type('george@') 

        cy.get(el.btnSalvar).contains('Salvar').click({ force: true, multiple: true })
        //cy.get(el.btnSalvar).click()

   }


    editarCadastro () {
        cy.
        get(':nth-child(1) > .mt-5')
        .contains('george@gmail.com')
        .siblings()
        .children()
        .filter(':contains("Ações")')
        .click()
        .contains('Editar')
        .click({ force: true })

        cy.get("[value='George Lucas']").should('have.value', 'George Lucas')
        .clear()
        .type('George Wilson') 

        cy.get("[value='george@gmail.com']").should('have.value', 'george@gmail.com')
        .clear()
        .type('george1@ticto.com') 


        cy.get("[class='btn btn-primary']").contains('Salvar').click({ force: true, multiple: true })
        cy.wait(3000)

        cy.contains(Cypress.env('editadoSucesso')).should('be.visible')


    }


    excluirCadastro () {
        cy.
        get(':nth-child(1) > .mt-5')
        .contains('george')
        .siblings()
        .children()
        .filter(':contains("Ações")')
        .click()
        .contains('Excluir')
        .click({ force: true })

        //cy.get("[value='George Lucas']").should('have.value', 'George Lucas')
        //.clear()
        //.type('George Wilson') 

        //cy.get("[value='george@gmail.com']").should('have.value', 'george@gmail.com')
        //.clear()
        //.type('george1@ticto.com') 

        //cy.get('.modal-footer > .')
        cy.get("[class='btn btn-danger']").contains('Excluir').click({ force: true, multiple: true })
        //cy.wait(3000)

        cy.contains(Cypress.env('removidoSucesso')).should('be.visible')

    }

}
 


export default new Type()
