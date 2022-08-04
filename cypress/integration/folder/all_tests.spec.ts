import { EXPECTED_VALUE } from "../../fixtures/expectedValue";
import {dress, city} from "../../fixtures/titles";

const { requestFound, woman, deliveryInformation, exactAddress} = EXPECTED_VALUE;

describe("Wildberries.ru testing", () => {
    beforeEach("Open main page before each tests", () => {
        cy.visit("/");
    });
    it("Check input field", () => {
        cy.SearchInWildberries(requestFound, dress);
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
        cy.SelectAnAddress(exactAddress, city);
    });
});