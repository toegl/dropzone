/// <reference types="cypress" />

describe("Dropzone with zero configuration", () => {
  beforeEach(() => {
    cy.visit("/1-basic/zero_configuration.html");
  });

  it("uploads single file", () => {
    cy.intercept("POST", "/").as("upload");

    cy.get(".dropzone").attachFile("image.jpg", {
      subjectType: "drag-n-drop",
    });

    cy.wait("@upload").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body).to.deep.eq({
        success: true,
      });
    });
  });
});
