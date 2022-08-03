declare namespace Cypress {
    interface Chainable<Subject> {
        SearchInWildberries(expectedText: string, searchedText: string): void;

        GetMainList(text: string): void;

        Login(): void;

        OrderDelivery(text: string): void;

        SelectAnAddress(text: string, searchedText: string): void;
    }
}