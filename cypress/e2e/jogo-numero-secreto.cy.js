describe('testes do jogo numero secreto', () => {

   beforeEach(()  => {
    cy.visit('http://127.0.0.1:5500/numero-secreto/index.html')
   })

it('Deve exibir o título principal da página', () => {
 cy.get('h1').should('be.visible')
})

it('Deve permitir digitar um numero e clicar em chutar', () => {
 cy.get('.container__input')
  .type('5')
  .should('have.value', '5')

  cy.contains('button', 'Chutar').click()
 })

it('Deve exibir mensagem de feedback após o chute', () => {
 cy.get('.container__input').type('5')
 cy.contains('button', 'Chutar').click()

 cy.get('p').should('be.visible')

})

it('Deve permitir ganhar o jogo ao acertar o número secreto', () => {
  cy.window().then((win) => {
    cy.get('.container__input').type(win.numeroSecreto)
    cy.contains('button', 'Chutar').click()
  })

  cy.get('h1').should('contain', 'Acertou!')
  cy.get('#reiniciar').should('not.be.disabled')
})

 it('Deve reiniciar o jogo ao clicar em Novo jogo', () => {
  cy.window().then((win) => {
    cy.get('.container__input').type(win.numeroSecreto)
    cy.contains('button', 'Chutar').click()
  })

  cy.get('#reiniciar').click()

  cy.get('h1').should('contain', 'Jogo do número secreto')
  cy.get('#reiniciar').should('be.disabled')
})

it('Deve dizer que o número secreto é menor quando o chute é maior', () => {
  cy.window().then((win) => {
    cy.get('.container__input').type(win.numeroSecreto + 1)
  })
  cy.contains('button', 'Chutar').click()

  cy.get('.texto__paragrafo').should('contain', 'menor')
})

it('Deve dizer que o número secreto é maior quando o chute é menor', () => {
  cy.window().then((win) => {
    cy.get('.container__input').type(win.numeroSecreto - 1)
  })
  cy.contains('button', 'Chutar').click()

  cy.get('.texto__paragrafo').should('contain', 'maior')
 })
})