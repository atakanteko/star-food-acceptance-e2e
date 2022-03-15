Feature: Create Order Page

  Background:
    Given that user on dashboard
    Given user click "Add New Order"

  Scenario: When user fill all inputs and sees add order button's background color as green
    Given user types "Atakan" to "Name Input Box" input
    Given user types "05343332211" to "Contact Input Box" input

    When user selects items in "Order Items" select box

    Then user sees "Add Order" button's background color as green

  Scenario: When user fill all inputs and go dashboard page and sees the meal
    Given user types "Mehmet" to "Name Input Box" input
    Given user types "05343332211" to "Contact Input Box" input
    Given user selects items in "Order Items" select box
    Given user click "Add Order" button

    When user landing dashboard

    Then user Mehmet sees the added meal

  Scenario: When user fill all inputs and select takeaway then trans type should be takeaway
    Given user types "Elif" to "Name Input Box" input
    Given user types "05443331199" to "Contact Input Box" input
    Given user select "Takeaway" radio
    Given user selects items in "Order Items" select box
    Given user click "Add Order" button

    When user landing dashboard

    Then user Elif sees transfer type as "Takeaway Trans Type"

  Scenario: When user fill all inputs and sees number of
    Given user types "Kemal" to "Name Input Box" input
    Given user types "05443331199" to "Contact Input Box" input
    Given user select "Takeaway" radio
    Given user selects items in "Order Items" select box
    Given user click "Add Order" button

    When user landing dashboard

    Then user Kemal sees "Show 1 Elements" in the header
  @cell
  Scenario: When user fill all inputs and sees number of meals
    Given user types "Kemal" to "Name Input Box" input
    Given user types "05443331199" to "Contact Input Box" input
    Given user select "Takeaway" radio
    Given user selects items in "Order Items" select box
    Given user click "Add Order" button
    Given user landing dashboard

    When user click "Toggle Nav" button

    Then user Kemal sees "1" in the drawer
