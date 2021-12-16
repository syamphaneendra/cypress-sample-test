import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage";
import PaybillPage from "../../../../support/pageObjects/PaybillPage";
const homepage = new HomePage();
const paybillPage = new PaybillPage();

Given("I am on the Zero Bank application page", function() {
    cy.visit(Cypress.env("url"));
});

When("I login to the application", function() {
    homepage.login("username", "password");
    Cypress.config("defaultCommandTimeout", 8000);
});

Then("I should see the six menu list items", function() {
    homepage.getmenulist().should("have.length", 6);
});

When(
    "I try to login to the application with incorrect credentials",
    function() {
        homepage.login("username", "passwor");
        Cypress.config("defaultCommandTimeout", 8000);
    }
);

Then("I should see login error message", function() {
    homepage.getErrorMessage().then(function(el) {
        const actualText = el.text();
        expect(actualText.includes("Login and/or password are wrong.")).to.be.true;
    });
});

When("I provide the feedback", function() {
    homepage.setFeedback("Sam", "sam@nttdata.com", "Hello", "This is a msg");
    Cypress.config("defaultCommandTimeout", 8000);
});

Then("I should see the feedback response", function() {
    homepage.getFeedback().then(function(el) {
        const actualText = el.text();
        expect(actualText.includes("Thank you for your comments, Sam.")).to.be.true;
    });
});

When(
    "I transfer {string} dollars to the {string} {string} account {string}",
    function(amount, payee, account, date) {
        paybillPage.selectPayee().select(payee);
        paybillPage.selectAccount().select(account);
        paybillPage.setAmount(amount);
        paybillPage.setDate(date);
        paybillPage.setDescription("Hellooo");
        paybillPage.getPayButton().click({ force: true });
    }
);

Then("I should see the successful transfer message", function() {
    paybillPage.getAlertMessage().then(function(el) {
        const actualText = el.text();
        expect(
            actualText.includes("The payment was successfully submitted.")
        ).to.be.true;
    });
});

When("I go to pay saved payee option under the Pay Bills section", function() {
    homepage.getPaybill().click({ force: true });
});

When("I add a new payee in Pay Bills section", function() {
    homepage.getPaybill().click({ force: true });
    paybillPage.getAddNewPayee().click({ force: true });
    paybillPage.setPayeeName("Bob");
    paybillPage.setPayeeAddress("34 cross road");
    paybillPage.setAccount("1234");
    paybillPage.setPayeeDetails("Electrician");
    paybillPage.getAddPayeeButton().click({ force: true });
});

Then("I should see the successful message with payee name", function() {
    paybillPage.getAlertMessage().then(function(el) {
        const actualText = el.text();
        expect(
            actualText.includes("The new payee Bob was successfully created.")
        ).to.be.true;
    });
});