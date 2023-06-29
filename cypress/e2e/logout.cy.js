describe('Log Out Scenario', () => {
  it('Success Log Out', () => {
    cy.visit('https://saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
  })
})