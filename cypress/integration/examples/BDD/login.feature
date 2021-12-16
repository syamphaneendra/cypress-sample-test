Feature: Zero Bank application


Scenario: Verify the Zero Bank application menu list
Given I am on the Zero Bank application page
When I login to the application
Then I should see the six menu list items

Scenario: Verify the Zero Bank application login error message
Given I am on the Zero Bank application page
When I try to login to the application with incorrect credentials
Then I should see login error message

Scenario: Verify feedback response of the Zero Bank application
Given I am on the Zero Bank application page
When I provide the feedback
Then I should see the feedback response

Scenario: Verify the Zero Bank application add payee functionality
Given I am on the Zero Bank application page
When I login to the application
And I add a new payee in Pay Bills section
Then I should see the successful message with payee name

Scenario: Verify the Zero Bank application fund transfer success message
Given I am on the Zero Bank application page
And I login to the application
And I go to pay saved payee option under the Pay Bills section
When I transfer "100" dollars to the "bofa" "Loan" account "2021-06-29"
Then I should see the successful transfer message

