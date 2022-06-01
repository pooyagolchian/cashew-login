/// <reference types="cypress" />

describe('Cashew auth users E2E testing', () => {
  it('should render all input and all element', () => {
    cy.visit('/login')
    cy.location('pathname').should('eq', '/login')
    cy.get('[data-testid="username"]').should('exist')
    cy.get('[data-testid="password"]').should('exist')
    cy.get('[data-testid="username"]').type('eve.holt@reqres.in')
    cy.get('[data-testid="password"]').type('1234567')
    cy.get('[data-testid="login-btn"]').click()
    cy.location('pathname').should('eq', '/dashboard')
  })

  it('should test dashboard', () => {
    cy.location('pathname').should('eq', '/dashboard')
    cy.get('[data-testid="user-email"]').should('exist')
    cy.get('[data-testid="logout-btn"]').should('exist')
  })

  it('should logout dashboard', () => {
    cy.location('pathname').should('eq', '/dashboard')
    cy.get('[data-testid="logout-btn"]').should('exist')
    cy.get('[data-testid="logout-btn"]').click()
    cy.location('pathname').should('eq', '/login')
  })
})
