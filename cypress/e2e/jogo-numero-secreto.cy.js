describe('testes do jogo numero secreto', () => {

   beforeEach(()  => {
    cy.visit('http://127.0.0.1:5500/numero-secreto/index.html')
   })

it('passes', () => {
 cy.get('h1').should('be.visible')
})

it('Deve permitir digitar um numero e clicar em chutar', () => {
 cy.get('input')
  .type('5')
  .should('have.value', '5')

  cy.contains('button', 'chutar').click()
 })
})