import { LOCATORS } from "../locators/locators";

const {
    input, search, result, menu, forWoman, resultCloseForWoman, login, loginInput,
    delivery, conditions, address, information, field, button, addressButton, exactLocation,
} = LOCATORS;

Cypress.Commands.add("SearchInWildberries", (expectedText: string, searchedText: string): void => {
    cy.get(input).type(searchedText);
    cy.get(search).click();
    cy.get(result).should("have.text", expectedText);

});
Cypress.Commands.add("GetMainList", (text: string): void => {
    cy.get(menu).click();
    cy.get(forWoman).click();
    cy.get(resultCloseForWoman).should("be.visible").and("contain", text);
});
Cypress.Commands.add("Login", (): void => {
    cy.get(login).click();
    cy.get(loginInput).should("be.empty").and("not.have.text");
});
Cypress.Commands.add("OrderDelivery", (text: string): void => {
    cy.get(delivery).click();
    cy.get(conditions).click();
    cy.get(information).should("be.visible").and("contain", text);
});
Cypress.Commands.add("SelectAnAddress", (text: string, searchedText: string): void => {
    cy.get(address).first().type(searchedText);
    cy.get(field).within(() => {
        cy.get(button).click();
    });
    cy.get(addressButton).first().click();
    cy.get(exactLocation).should("not.be.visible").and("contain", text);
});