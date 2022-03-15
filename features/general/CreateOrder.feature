Feature: Create Order Page

  Background:
    Given that user on dashboard
    Given user click "Add New Order"

  Scenario: When user fill all inputs and sees add order button's background color as green
    Given user types "Atakan" to "Name Input Box" input
    Given user types "05343332211" to "Contact Input Box" input

    When user selects items in "Order Items" select box

    Then user sees "Add Order" button's background color as green

