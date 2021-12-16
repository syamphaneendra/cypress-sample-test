class HomePage {
  getEditBox() {
    return cy.get('input[name="name"]:nth-child(1)');
  }
  getShopTab() {
    return cy.get(":nth-child(2) >.nav-link");
  }

  login(username, password) {
    cy.get(".icon-signin").click({ force: true });
    cy.clearCookies();
    cy.get("input#user_login").type(username);
    cy.get("#user_password").type(password);
    cy.get("input.btn.btn-primary").trigger("mouseover").click({ force: true });
  }

  getmenulist() {
    return cy.get("ul.nav.nav-tabs li");
  }

  getErrorMessage() {
    return cy.get(".alert.alert-error");
  }

  setFeedback(name, email, subject, message) {
    cy.get("li#feedback").click({ force: true });
    cy.get("input#name").type(name);
    cy.get("input#email").type(email);
    cy.get("input#subject").type(subject);
    cy.get("#comment").type(message);
    cy.get("input.btn-signin.btn.btn-primary").click({ force: true });
  }

  getFeedback() {
    return cy.get("div .offset3.span6");
  }

  getPaybill() {
    return cy.get("#pay_bills_tab > a");
  }
}

export default HomePage;
