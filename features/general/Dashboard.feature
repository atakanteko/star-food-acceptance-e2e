Feature: Dashboard Page

  Scenario: Landing dashboard page
    Given that user on dashboard
    When user landing dashboard
    Then user should see "Accepted" text

  Scenario: User wants to go create order page
    Given that user on dashboard
    When user click "Add New Order"
    Then user should see "Create Order" text

  Scenario: User wants to go create order page via logo
    Given that user on dashboard
    When user click "Create Order Image"
    Then user should see "Create Order" text
