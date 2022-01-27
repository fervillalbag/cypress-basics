/// <reference types="cypress" />

describe("Basic test", () => {
  before(() => {
    cy.then(() => {
      window.localStorage.setItem("__auth__token", "");
    });
  });

  beforeEach(() => {
    cy.visit("https://vercel.app/");
  });

  it("We have correctly title", () => {
    cy.visit("https://nextjs.org/");

    // ... cy.contains()
    // en caso de que exista más de una coincidencia siempre
    // obtendrá el primer elemento que cumpla con la condición
    cy.contains("Start Learning").should("exist");
    // cy.contains("Documentation").click();
    // cy.contains("[type='submit']", "Enviar");
    // cy.contains("h2", "Title of page");

    // también funciona con selectores heredados > +
    // cy.contains("form", "Enviar");

    // ... find()
    // se recomienda usar de la siguiente forma
    cy.get(".article").find("footer");

    // ... cy.get()
    // get se encarga de traer TODAS las coincidencias con los parámetros requeridos
    cy.get("div[id=__next]");
    cy.get("div#__notnext").should("not.exist");
    cy.get("[role=region]");
    // cy.get("form").get("input").type("New todo");
    // cy.get(".button__submit");
    // cy.get("[className='button__submit button__submit--error']");
    // cy.get("[type='submit']");
    // cy.get("button.button__submit[type='submit']");

    // cy.getByTestId("btn-1");
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

  it("Verifying link url", () => {
    cy.visit("https://nextjs.org/");

    cy.contains("Documentation").click();
    cy.url().should("include", "/docs");

    cy.go("back");
    cy.contains("Start Learning").should("exist");
    cy.log("Finished and current page is", cy.url()); // Not found
    cy.url().then((value) => {
      cy.log("The current page is", value);
    });

    // console.log() mostrará en la consola del navegador y no de la UI
  });

  it.only("Login", () => {
    cy.get("[href='/login']").click();
    cy.contains("Continue with Email").click();

    // ... Ingresando un correo no válido, podemos validar analizando
    // ... si envía un mensaje con el texto de error

    // cy.get("[placeholder='Email Address']").type("21fervillalbag");
    // cy.get("button[type='submit']").click();
    // cy.contains("Email not found").should("exist");

    /*
      Para este caso se recomienda tener en it's diferentes
      it("Login works wrong", () => {...})
      it("Login works fine", () => {...})
    */

    // Ingresando un correo válido
    cy.get("[placeholder='Email Address']").type(
      "21fervillalbag@gmail.com"
    );
    cy.get("button[type='submit']").click();
    cy.contains("Awaiting Confirmation").should("exist");
  });

  it("Should load feature correctly", () => {
    cy.visit("https://codepen.io");

    cy.log("Checking for the sidebar");
    cy.contains("Trying to connect").should("exist");

    cy.log("Checking for the button");
    cy.get("[data-testid='xterm-controls'] > div").should(
      "contain.text",
      "Connecting"
    );

    // ... using javascript code
    // const fileName = Math.random().toString().slice(0, 3);

    // ... using mouse and keyboard action
    // cy.get("[data-testid=xterm").type("{ctrl}{c}");
    // cy.get("[data-testid=xterm").rightclick()

    // cy.debug();
  });
});
