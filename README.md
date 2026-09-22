♿️ Access Driven Development Kata
====

This kata is designed to practice TDD on an accessible way by following the testing-library guidelines.

The goal is to learn testing and accessibility by building test a simple accessible greeting application with testing-librairy.

The application allows you to add entries in your address book and send a customizable greet message to them.  

You can refer to https://www.w3.org/WAI/ARIA/apg/patterns/ for accessibity concept.

## Testing library priority guidelines 

According to [👉🏼 testing-library recommendation](https://testing-library.com/docs/queries/about/#priority.), use as much as possible this priority
order while accessing your application : 

1. Queries Accessible to Everyone
2. Semantic Queries HTML5 and ARIA
3. (Test IDs) ?

## Example of the application (for inspiration):

![Example of an application](./address-book-example.png)

##  Some useful tips for testing without mocks

![Simulator principles](./simulators-principles.png)

## References

 - prefer using get... instead of query... to have better feedback when control is not found ([see testing librairy queries](https://testing-library.com/docs/queries/about/))
 - [How to properly handle inline error messages while the user is typing (ARIA)?](https://stackoverflow.com/questions/71615554/how-to-properly-handle-inline-error-messages-while-the-user-is-typing-aria)

## Some tips for mac-OS users

 - shortcut to activate voice over : `cmd + F5`
 - to interact with dialog, use `ctrl + option + arrow left/right` to navigate through controls and `ctrl + option + space` to activate selected control.
 - to list all actions use `Ctrl + option + U`
 - to turn on/off keyboard help `Ctrl + option + K`
 - to turn on/off vocalisation go to VoiceOver Utility > Speech > Disable speech