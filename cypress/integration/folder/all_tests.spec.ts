import { EXPECTED_VALUE } from "../../fixtures/expectedValue";

const { requestFound, woman, deliveryInformation, exactAddress} = EXPECTED_VALUE;

describe("Wildberries.ru testing", () => {
    beforeEach("Open main page before each tests", () => {
        cy.visit("/");
    });
    it.only("Check input field", () => {
        cy.SearchInWildberries(requestFound);
    });
    it("Check menu-list", () => {
        cy.GetMainList(woman);
    });
    it("Check login", () => {
        cy.Login()
    });
    it("Check delivery", () => {
        cy.OrderDelivery(deliveryInformation);
    });
    it("Check address selection", () => {
        cy.OrderDelivery(deliveryInformation);
        cy.SelectAnAddress(exactAddress);
    });
});