// Prompt the user to enter a positive integer
var userInput = prompt("Enter a positive integer:");

// Convert the user input to a number
var number = parseInt(userInput);

// Display the number, rounded value, floor value, and ceil value in the browser
document.write("Number: " + number + "<br>");
document.write("Round off value: " + Math.round(number) + "<br>");
document.write("Floor value: " + Math.floor(number) + "<br>");
document.write("Ceil value: " + Math.ceil(number) + "<br>");

// Prompt the user to enter a negative floating-point number
var userInput = prompt("Enter a negative floating-point number:");

// Convert the user input to a number
var number = parseFloat(userInput);

// Display the number, rounded value, floor value, and ceil value in the browser
document.write("Number: " + number + "<br>");
document.write("Round off value: " + Math.round(number) + "<br>");
document.write("Floor value: " + Math.floor(number) + "<br>");
document.write("Ceil value: " + Math.ceil(number) + "<br>");

// Prompt the user to enter a number
var userInput = prompt("Enter a number:");

// Convert the user input to a number
var number = parseFloat(userInput);

// Calculate the absolute value of the number
var absoluteValue = Math.abs(number);

// Display the absolute value of the number in the browser
document.write("Absolute value of " + number + " is " + absoluteValue);

// Generate a random number between 1 and 6 for the dice
var diceValue = Math.floor(Math.random() * 6) + 1;

// Display the value of the dice in the browser
document.write("The value of the dice is: " + diceValue);

// Generate a random number between 0 and 1 for the coin toss
var randomNum = Math.random();

// Determine the value of the coin toss
var coinValue = (randomNum < 0.5) ? "Heads" : "Tails";

// Display the value of the coin toss in the browser
document.write("The value of the coin toss is: " + coinValue);

// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number in the browser
document.write("Random number between 1 and 100: " + randomNumber);

// Prompt the user to enter their weight
var userInput = prompt("Enter your weight:");

// Parse the user input to extract the weight value
var weight = parseFloat(userInput);

// Display the weight in the browser
document.write("Your weight is: " + weight + " kgs");

// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to input a number
var userInput = prompt("Guess the secret number (between 1 and 10):");

// Parse the user input to extract the guessed number
var guessedNumber = parseInt(userInput);

// Check if the guessed number matches the secret number
if (guessedNumber === secretNumber) {
  document.write("Congratulations! You guessed the secret number.");
} else {
  document.write("Sorry, the secret number was " + secretNumber + ". Try again!");
}
