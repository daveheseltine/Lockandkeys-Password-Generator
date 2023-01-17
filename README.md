# 05-Challenge (Trilogy Skills Bootcamp: Week 05 - Challenge)

## Important Notes
The methods I selected to implement in the Javascript file were to reflect what we had learnt in week 5 of the course.

I wanted to add extra functionality to the project in that the "Cancel" button presented in the "Confirm" parts of the code would not exit the function, effectively locking the user into a never ending cycle until they went through the whole function or gave up and closed the page. This could add considerable frustration for users and by adding a way to escape this would promote the webpage.

Locally the project ran fine with linking resources such as:
> link rel="stylesheet" type="text/css" href="./assets/css/style.css"

However GitHub Pages was not functioning with said links, and was edited to be linked as:
> link rel="stylesheet" type="text/css" href="../05-Challenge/assets/css/style.css"

<br>

___
## Student
David Heseltine
> **Note**: Apologies for any inconvenience caused by my GitHub Username 'lulose', as I am using my account that predates the course.

</br>

___
## Description
This week’s challenge required me to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code.

This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code that I wrote. It has a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.<a href="#references">*[1]*</a>

</br>

___
## User Story 
The following image shows the web application's appearance and functionality:

![password generator demo](../05-Challenge/assets/images/05-javascript-challenge-demo.png)

* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 10 characters but no more than 64.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
  * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

</br>

___
## URL
* The URL of the deployed application: https://lulose.github.io/05-Challenge/
* The URL of the GitHub Repository: https://github.com/lulose/05-Challenge

</br>

___
## References
1. Trilogy Skills Bootcamp (2022) *UK-VIRT-FE-PT-12-2022-U-LOLC/05-advanced-javascript-module/04-password-generator-lesson/README.md*