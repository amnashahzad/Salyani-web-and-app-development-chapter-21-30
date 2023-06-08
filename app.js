// Prompt the user for their first name
var firstName = prompt("Enter your first name:");

// Prompt the user for their last name
var lastName = prompt("Enter your last name:");

// Merge the first and last name into a variable called fullName
var fullName = firstName + " " + lastName;

// Greet the user using their full name
alert("Hello, " + fullName + "! Welcome!");

// Prompt the user to enter their favorite mobile phone model
var favoritePhoneModel = prompt("Enter your favorite mobile phone model:");

// Calculate the length of the user input
var inputLength = favoritePhoneModel.length;

// Display the length of the user input in the browser
document.write("The length of your input is: " + inputLength);

// Define the word
var word = "Hello World";

// Find the last index of the letter "l" in the word
var lastIndex = word.lastIndexOf("l");

// Display the result in the browser
document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);

// Define the word
var word = "Pakistani";

// Find the character at the 3rd index in the word
var character = word.charAt(3);

// Display the result in the browser
document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);

// Prompt the user for their first name
var firstName = prompt("Enter your first name:");

// Prompt the user for their last name
var lastName = prompt("Enter your last name:");

// Merge the first and last name into a variable called fullName using the concat() method
var fullName = firstName.concat(" ", lastName);

// Greet the user using their full name
alert("Hello, " + fullName + "! Welcome!");

// Define the word
var word = "Hyderabad";

// Replace "Hyder" with "Islam" in the word
var replacedWord = word.replace("Hyder", "Islam");

// Display the result in the browser
document.write("The modified word is: " + replacedWord);

// Define the original string
var message = "Ali and Sami are best friends. They play cricket and football together.";

// Replace all occurrences of "and" with "&" in the string
var replacedMessage = message.replace(/and/g, "&");

// Display the result in the browser
document.write("The modified message is: " + replacedMessage);

// Define the string
var str = "472";

// Convert the string to a number
var num = Number(str);

// Display the value and type of the converted number
document.write("Converted Number: " + num + "<br>");
document.write("Type of Converted Number: " + typeof num);

// Prompt the user for input
var userInput = prompt("Enter your input:");

// Convert the input to capital letters
var capitalInput = userInput.toUpperCase();

// Display the converted input in the browser
document.write("Capitalized Input: " + capitalInput);

// Prompt the user for input
var userInput = prompt("Enter your input:");

// Convert the input to capital letters
var capitalInput = userInput.toUpperCase();

// Display the converted input in the browser
document.write("Capitalized Input: " + capitalInput);

// Define the variable num
var num = 35.36;