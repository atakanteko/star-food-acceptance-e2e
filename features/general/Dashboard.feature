Feature: Try to login as any user
  I want to login unsuccessfully.
  So that I can check the warnings depend on this behavior

  Scenario: Landing dashboard page
    Given that user on dashboard
    When user landing dashboard
    Then user should see "Accepted" text
  @cell
  Scenario: User wants to go create order page
    Given that user on dashboard
    When user click "Add New Order" button
    Then user should see "Create Order" text
