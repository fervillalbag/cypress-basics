/// <reference types="cypress" />

describe("Basic test", () => {
  it("We have correctly title", () => {
    cy.visit("https://nextjs.org/");

    // ... cy.contains()
    cy.contains("Start Learning").should("exist");
    // cy.contains("Documentation").click();

    // ... cy.get()
    cy.get("div[id=__next]");
    cy.get("div#__notnext").should("not.exist");
    cy.get("[role=region]");
  });

  it("We have correctly button text", () => {
    cy.visit("https://nextjs.org/");
    // cy.get("[title=Showcase]").should("have.text", "Showcase");
    cy.viewport("iphone-6");

    cy.get("[title=Showcase]").should("have.text", "Showcase");
  });

  it("Looks like good", () => {
    cy.visit("https://nextjs.org/");
    cy.viewport("iphone-6");

    cy.contains("Documentation").click();
    // confirm current page correct
    cy.contains("Getting Started").should("exist");
    cy.get("input[type='search'][placeholder='Search...']")
      .first()
      .type("Hello world");

    // cy.get("[id='email-input-field']").type("fervillalbag@gmail.com");
  });

  it("Home index page", () => {
    cy.visit("https://nextjs.org/");

    cy.contains("The React Framework for Production").should("exist");
    cy.contains("Start Learning").should("exist");
    cy.contains("License: MIT").should("exist");
    cy.contains("The Web SDK").should("exist");
  });

  it.only("Verifying link url", () => {
    cy.visit("https://nextjs.org/");

    cy.contains("Documentation").click();
    cy.url().should("include", "/docs");

    cy.go("back");
    cy.contains("Start Learning").should("exist");
  });
});
