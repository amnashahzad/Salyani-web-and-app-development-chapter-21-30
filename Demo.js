// Define the variable num
var num = 35.36;
// Convert num to a string
var numString = num.toString();

// Remove the dot from the string
var result = numString.replace(".", "");

// Display the result in the browser
document.write("Modified Number: " + result);

// Prompt the user to enter a username
var username = prompt("Enter your username:");

// Check if the username contains any special symbols
if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
    // Prompt the user to enter a valid username
    username = prompt("Please enter a valid username without special symbols [@ . , !]:");
}

// Display the username
document.write("Username: " + username);

// Define the array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user to enter an item for search
var userInput = prompt("Enter an item to search:").toLowerCase();

// Perform case-insensitive search in the array
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput) {
        found = true;
        break;
    }
}

// Display the result based on item availability
if (found) {
    alert("Yes, the item is found in the list.");
} else {
    alert("No, the item is not found in the list.");
}

// Prompt the user to enter a password
var password = prompt("Enter a password:");

// Define regular expressions for alphabets and numbers
var alphabetRegex = /[a-zA-Z]/;
var numberRegex = /[0-9]/;

// Check if the password meets the requirements
if (
  password.length >= 6 &&
  alphabetRegex.test(password) &&
  numberRegex.test(password) &&
  isNaN(password[0])
) {
  alert("Password is valid!");
} else {
  alert("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.");
}

// Define the string
var university = "University of Karachi";

// Convert the string to an array using the split method
var array = university.split(" ");

// Display the elements of the array in the browser
document.write("Array Elements: " + array);


// Prompt the user to enter an input
var userInput = prompt("Enter your input:");

// Get the last character of the input
var lastCharacter = userInput.charAt(userInput.length - 1);

// Display the last character in the browser
document.write("Last Character: " + lastCharacter);

// Define the string
var sentence = "The quick brown fox jumps over the lazy dog";

// Convert the string to lowercase for case-insensitive search
var lowercaseSentence = sentence.toLowerCase();

// Define the word to count
var word = "the";

// Split the string into an array of words
var wordsArray = lowercaseSentence.split(" ");

// Initialize a counter variable
var count = 0;

// Iterate over each word in the array and count the occurrences of the word
for (var i = 0; i < wordsArray.length; i++) {
  if (wordsArray[i] === word) {
    count++;
  }
}

// Display the count of occurrences in the browser
document.write("Number of Occurrences of 'the': " + count);