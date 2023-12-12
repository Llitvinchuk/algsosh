const circle = 'div[class*="circle_circle"]';
const color = "rgb(0, 50, 255)";
const secondColor = "rgb(210, 82, 225)";

describe("Строка", () => {
  beforeEach(() => {
    cy.visit("/recursion");
  });

  it("Кнопка добавления недоступна, если в инпуте пусто", () => {
    cy.get("input").clear();
    cy.get("button").should("be.disabled");
  });

  it("Строка разворачивается корректно", () => {
    cy.get("input").type("hello");
    cy.should("have.value", "hello");
    cy.get("button").contains("Развернуть").click();

    cy.clock();
    cy.get(circle)
      .eq(0)
      .should("have.css", "border-color", secondColor)
      .contains("h");

    cy.get(circle)
      .eq(1)
      .should("have.css", "border-color", color)
      .contains("e");

    cy.get(circle)
      .eq(2)
      .should("have.css", "border-color", color)
      .contains("l");

    cy.get(circle)
      .eq(3)
      .should("have.css", "border-color", color)
      .contains("l");

    cy.get(circle)
      .eq(4)
      .should("have.css", "border-color", secondColor)
      .contains("o");

    cy.tick(1000);
    cy.get(circle)
      .eq(0)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains("o");

    cy.get(circle)
      .eq(1)
      .should("have.css", "border-color", secondColor)
      .contains("e");

    cy.get(circle)
      .eq(2)
      .should("have.css", "border-color", color)
      .contains("l");

    cy.get(circle)
      .eq(3)
      .should("have.css", "border-color", secondColor)
      .contains("l");

    cy.get(circle)
      .eq(4)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains("h");

    cy.tick(1000);
    cy.get(circle)
      .eq(0)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains("o");

    cy.get(circle)
      .eq(1)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains("l");

    cy.get(circle)
      .eq(2)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains("l");

    cy.get(circle)
      .eq(3)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains("e");

    cy.get(circle)
      .eq(4)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains("h");

    cy.tick(1000);
    cy.get(circle)
      .eq(0)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains("o");

    cy.get(circle)
      .eq(1)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains("l");

    cy.get(circle)
      .eq(2)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains("l");

    cy.get(circle)
      .eq(3)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains("e");

    cy.get(circle)
      .eq(4)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains("h");
  });
});
