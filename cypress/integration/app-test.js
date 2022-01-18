
describe('Main page', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('should display the main page', () => {
    cy.get('header').find('img').should('have.attr', 'alt').should('include', 'crafty beer title')
  })

  it('should search for a city', () => {
    cy.intercept('GET', 'https://api.openbrewerydb.org/breweries?by_city=las_vegas', [
      {
        "id": "banger-brewing-co-las-vegas",
        "name": "Banger Brewing Co",
        "street": "450 Fremont St Ste 135"
      },
      {
        "id": "big-dogs-brewing-co-las-vegas",
        "name": "Big Dog's Brewing Co",
        "street": "4547 N Rancho Dr Ste A"
      },
      {
        "id": "sin-city-beer-co-las-vegas",
        "name": "Sin City Beer Co",
        "street": "3663 Las Vegas Blvd S Ste 504 Miracle Mile Shops",
      }
    ])
    cy.get('input')
    .type('las vegas')
    .get('.search-btn').click()
  })

  it('should check results', () => {
    cy.get('.brewy-container').contains('Banger Brewing Co')
    .get('.brewy-container').contains("Big Dog's Brewing Co")
    .get('.brewy-container').contains('Sin City Beer Co')
  })

  it('should click on a brewery', () => {
    cy.intercept('GET', 'https://api.openbrewerydb.org/breweries/big-dogs-brewing-co-las-vegas', {
      "id": "big-dogs-brewing-co-las-vegas",
      "name": "Big Dog's Brewing Co",
      "brewery_type": "brewpub",
      "street": "4547 N Rancho Dr Ste A",
      "city": "Las Vegas",
      "state": "Nevada",
      "phone": "7023683715",
      "website_url": "http://www.bigdogsbrews.com"
    })
    .get('.brewy-container').contains("Big Dog's Brewing Co").click()
  })

  it('should check the details of selected brewery', () => {
    cy.get('.brewy-details').contains("Big Dog's Brewing Co")
    .get('.brewy-details').contains('4547 N Rancho Dr Ste A')
    .get('.brewy-details').contains('7023683715')
  })

  it('display home after back is clicked', () => {
    cy.get('.back-btn').click()
    .get('.find-text').contains('Find a brewery near you')
  })
})