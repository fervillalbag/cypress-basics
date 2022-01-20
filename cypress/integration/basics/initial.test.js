/// <reference types="cypress" />

describe("Basic test", () => {
  it("We have correctly title", () => {
    cy.visit("https://nextjs.org/");
    cy.contains("Start Learning").should("exist");
  });
});
