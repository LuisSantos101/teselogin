
Cypress.Commands.add("criarCadastro", () => {
//Realiza o Cadastro Válido do Usuário
    cy.get('#name').type(Cypress.env('nome'));
    cy.get('#email').type(Cypress.env('email'));
    cy.get('#password').type(Cypress.env('password'));
    cy.contains('Cadastrar').click({force:true})
    cy.screenshot()
})

Cypress.Commands.add("emailInvalido", () => {
//Realiza a Tentativa de Cadastro com um email Inválido
    cy.get('#name').type(Cypress.env('nome'));
    cy.get('#email').type(Cypress.env('emailInvalido'));;
    cy.get('#password').type(Cypress.env('password'));
    cy.contains('Cadastrar').click({force:true})
    cy.screenshot()
})

Cypress.Commands.add("nomeInvalido", () => {
//Realiza a Tentativa de Cadastro com um nome Inválido
    cy.get('#name').type(Cypress.env('nomeInvalido'));
    cy.get('#email').type(Cypress.env('email'));;
    cy.get('#password').type(Cypress.env('password'));
    cy.contains('Cadastrar').click({force:true})
    cy.contains('Insira um Nome e Sobrenome válido.').should('be.visible')
    cy.screenshot()
})

Cypress.Commands.add("senhaInvalida", () => {
//Realiza a Tentativa de Cadastro com uma senha Inválida
    cy.get('#name').type(Cypress.env('nome'));
    cy.get('#email').type(Cypress.env('email'));;
    cy.get('#password').type(Cypress.env('senhaInvalida'));
    cy.contains('Cadastrar').click({force:true})
    cy.contains('O campo Password deve ter no minimo 8 caracteres.').should('be.visible')
    cy.screenshot()
})

Cypress.Commands.add("editarCadastroInvalido", () => {
//Realiza a Tentativa de Edição com um dado Inválido
    cy.get(':nth-child(1) > .mt-5')
    .contains('george@gmail.com')
    .siblings()
    .children()
    .filter(':contains("Ações")')
    .click()
    .contains('Editar')
    .click({ force: true })

    cy.get("[value='George Lucas']")
    .should('have.value', 'George Lucas')
    .clear()
    .type('nomeInvalido') 


    cy.get('.modal-footer > .btn-primary')
    .contains('Salvar')
    .click({ force: true, multiple: true })
    //cy.wait(1500)
    cy.screenshot()


    cy.contains(Cypress.env('nmInvalido'))
    .should('be.visible')

    cy.get("[value='george@gmail.com']")
    .should('have.value', 'george@gmail.com')
    .clear()
    .type('george@') 

    cy.get('.modal-footer > .btn-primary')
    .contains('Salvar')
    .click({ force: true, multiple: true })
    cy.screenshot()
})

Cypress.Commands.add("editarCadastro", () => {
//Realiza a Edição Válida do Cadastro
    cy.get(':nth-child(1) > .mt-5')
    .contains('george@gmail.com')
    .siblings()
    .children()
    .filter(':contains("Ações")')
    .click()
    .contains('Editar')
    .click({ force: true })

    cy.get("[value='George Lucas']")
    .should('have.value', 'George Lucas')
    .clear()
    .type('George Wilson') 

    cy.get("[value='george@gmail.com']")
    .should('have.value', 'george@gmail.com')
    .clear()
    .type('george1@ticto.com') 

    cy.get("[class='btn btn-primary']")
    .contains('Salvar')
    .click({ force: true, multiple: true })
    //cy.wait(1500)

    cy.contains(Cypress.env('editadoSucesso'))
    .should('be.visible')
    cy.screenshot()
})

Cypress.Commands.add("excluirCadastro", () => {
//Realiza a Exclusão do Cadastro
    cy.get(':nth-child(1) > .mt-5')
    .contains('george')
    .siblings()
    .children()
    .filter(':contains("Ações")')
    .click()
    .contains('Excluir')
    .click({ force: true })

    cy.get("[class='btn btn-danger']")
    .contains('Excluir')
    .click({ force: true, multiple: true })
    //cy.wait(3000)

    cy.contains(Cypress.env('removidoSucesso'))
    .should('be.visible')
    cy.screenshot()
})
