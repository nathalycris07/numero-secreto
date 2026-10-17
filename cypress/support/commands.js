Cypress.Commands.add('fazerChute', (value) => {
 cy.get('.container__input').type(String(value))
  cy.contains('button', 'Chutar').click()
})

Cypress.Commands.add('acertarNumeroSecreto', () => {
cy.window().then((win) => {
    cy.get('.container__input').type(win.numeroSecreto)
  })
})