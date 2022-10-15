/// <reference types="cypress" />

describe('Rooms', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
    cy.get("[id=':r0:']").type('test')
    cy.get("[id=':r1:']").type('testtest')
    cy.contains('button','Login').click()
  })

  it('Should return the home page', () => {
    cy.get("[id='home-link']").click()
    cy.get("[id='main-container']").get("[id='no-subject']").should("be.visible")
  })

  it('Should return the Math rooms', () => {
    cy.get("[id='subject-links-container']").contains("math").click()
    cy.get("[id='room-container']").contains('math').should("be.visible")
  })

  it('Should return the English rooms', () => {
    cy.get("[id='subject-links-container']").contains("english").click()
    cy.get("[id='room-container']").contains('english').should("be.visible")
  })

  it('Should return the History rooms', () => {
    cy.get("[id='subject-links-container']").contains("history").click()
    cy.get("[id='room-container']").contains('history').should("be.visible")
  })

  it('Should return the Science rooms', () => {
    cy.get("[id='subject-links-container']").contains("science").click()
    cy.get("[id='room-container']").contains('science').should("be.visible")
  })

  it('Should return the Language rooms', () => {
    cy.get("[id='subject-links-container']").contains("languages").click()
    cy.get("[id='room-container']").contains('languages').should("be.visible")
  })

  it('Should return the correct subject', () => {
    cy.get("[id='subject-links-container']").contains('miscellaneous').click()
    cy.get("[id='room-container']").contains('miscellaneous').should("be.visible")
  })
  


})