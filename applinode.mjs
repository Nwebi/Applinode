//This line imports the Node.js built-in module readline, 
//which provides an interface for reading input from the command line.

import readline from './app.mjs';

// This line creates a new Date object and calls the toLocaleDateString method to
// convert the date to a string in the format of the user's locale.
const currentDate = new Date().toLocaleDateString();

// This line defines a string variable welcomeMessage that contains a 
// welcome message for the user, including the current date
const welcomeMessage = `Welcome to applinode version 1.0, developed by '<Ebi Daniel>', running at ${currentDate}`;

// This line creates a readline interface, which is used to read input from the command line. 
// The createInterface method takes an object with two properties: input and output. 
// In this case, we're using process.stdin as the input and process.stdout as the output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// display welcome message followed by a new line
rl.write(welcomeMessage + '\n');

// create array of Nigerian states
const states = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 
  'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 
  'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 
  'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

// This line prompts the user for input using the question method of the readline interface. 
// The first argument is the prompt message, and the second argument is a callback function 
// that is called when the user enters a response
rl.question('Enter the number of states to display (like first 2 or 3 and so on or "all"): ', 
    answer => {
  let numStates;

  // These lines determine the number of states to display based on the user's input.
  // If the user enters "all", we set numStates to the length of the states array. 
  // Otherwise, we use a regular expression to extract the number from the user's input and 
  // parse it as an integer. If the user's input is not a number, we set numStates to 0
  if (answer.toLowerCase() === 'all') {
    numStates = states.length;
  } else {
    // extract number of states from user input
    const match = answer.match(/(\d+)/);
    numStates = match ? parseInt(match[1], 10) : 0;
  }

  // These lines display the requested number of states based on the value of numStates. 
  // If numStates is 0, we display an error message. Otherwise, we use a for loop to iterate over 
  // the first numStates elements of the states array and write them to the command line.
  if (numStates === 0) {
    rl.write('Invalid input.\n');
  } else {
    for (let i = 0; i < numStates; i++) {
      rl.write(states[i] + '\n');
    }
  }

  // This line closes the readline interface, indicating that we are done reading input from the user
  rl.close();
});
