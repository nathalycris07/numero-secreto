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
})