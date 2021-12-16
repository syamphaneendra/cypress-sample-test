class PaybillPage {
  selectPayee() {
    return cy.get("#sp_payee");
    //  cy.get("select").select("option2").should("have.value", "option2");
  }
  selectAccount() {
    return cy.get("#sp_account");
  }

  setAmount(amount) {
    cy.get("#sp_amount").type(amount);
  }

  setDate(date) {
    cy.get("#sp_date").click().type("2021-06-22");
    cy.get(":nth-child(4) > .span12").click();
  }

  setDescription(description) {
    return cy.get("#sp_description").type(description);
  }

  getPayButton() {
    return cy.get("#pay_saved_payees");
  }

  getAlertMessage() {
    return cy.get("#alert_content");
  }

  getAddNewPayee() {
    return cy.get(".ui-tabs-nav > :nth-child(2) > a");
  }

  setPayeeName(name) {
    cy.get("#np_new_payee_name").type(name);
  }

  setPayeeAddress(address) {
    cy.get("#np_new_payee_address").type(address);
  }

  setAccount(account) {
    cy.get("#np_new_payee_account").type(account);
  }

  setPayeeDetails(details) {
    cy.get("#np_new_payee_details").type(details);
  }

  getAddPayeeButton() {
    return cy.get("#add_new_payee");
  }
}

export default PaybillPage;
