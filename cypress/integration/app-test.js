/* eslint-disable no-undef */
describe('Anecdote App', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Anecdotes')
    cy.contains('Debugging is twice as hard as writing the code in the first place.')
  })

  it('Vote can be clicked', function() {
    cy.visit('http://localhost:3000')
    cy.contains('vote').click()
    cy.contains('You voted')
  })
})