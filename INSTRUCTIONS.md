Guided kata instructions
===

## Application title
- Write a test to check the page contains a title "Greeting App" with getByRole
- Execute the test and check it fails. Pay attention on the failure message.
    - Which feedback is given to you by testing library ?
    - How can you use this feedback to fix your test ?
- Write the code to make the test pass.
- Everything is green, you can commit before playing with the next step.

## Play with testing library query
- Duplicate the title in the component with the same text "Address Book" and run the test again.
    - Does your test still green ? Why ?
- Rewrite your test using getAll... instead of getBy...
    - Does your test still green ?
    - What is the difference between getBy and getAllBy ?
    - In an accessible point of view : How do you feel with the feedback given when your test fails when more than one matching element is found ?
- Revert your code to have only one title checked by getByRole.

## table and header
- Write a test ensuring a table with the accessible name 'Address Book entries' is displayed.
- Make the test pass.
- Questions :
    - Which strategy do you use to make table labeled ?
    - Find two other ways to label the table ? What are the pros and cons of each strategy ? (indice : aria-label, aria-labelledby, caption)
- Complete this test to check the table includes the column headers "First name", "Last name", "Email" and "Selected"

## (optional) write send greeting simulator

## Fill with data
- Write a new test that uses the SendGreetingSimulator to populate two entries, then verify the table displays them correct
- Questions :
    - How does a screen reader describe your application ?
    - Is it easy to understand what is displayed ?
    - How improve accessibility ?

## add entry

## send greet

## debrief
- Look at your tests.
    - How do they describe application behavior ? How can you improve their readability ?
    - Do you feel confident to add functionnality without introduce regression ?
    - Did you experience an unexpected red phase?
- What are your feeling about accessibility ?
    - Did you try a screen reader ?
    - Did you meet surprising difficulty or ease ?

Clues :
- Adapter contract testing
- Page object
- 