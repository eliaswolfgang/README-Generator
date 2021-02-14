// Packages needed for this application. Be sure to run npm i in your command-line shell before deploying this application!
const fs = require("fs");
const inquirer = require("inquirer");
const { generateMarkdown, licenseNames } = require("./utils/generateMarkdown");

// Array of questions for user input; these are based on README standards defined by Trilogy Education Coding Bootcamps.
const questions = [
    {   
        name: "title",
        type: "input",
        message: "What is the name of your project?"
    },
    {   
        name: "tableContents",
        type: "confirm",
        message: "Would you like to add a table of contents?",
    },
    {  
        name: "description",
        type: "input", 
        message: "Please provide a description of the project:"   
    },
    {   
        name: "installation",
        type: "input",
        message: "Please describe the installation process:"    
    },
    {   
        name: "usage",
        type: "input",
        message: "What is the intended usage of this project?"   
    },
    {   
        name: "testing",
        type: "input",
        message: "What is the testing process for this project?"  
    },
    {   
        name: "license",
        type: "list",
        message: "What license would you like to add to this project?",
        choices: licenseNames  
    },
    {   
        name: "username",
        type: "input",
        message: "Please enter your GitHub user name:"
    },
    {   
        name: "contributing",
        type: "confirm",
        message: "Would you like to allow contributors to this project?",
    },
    {   
        name: "images",
        type: "confirm",
        message: "Would you like to add images to this README?",
    },
    { when: function(answers) {
        return answers.contributing
        },
        name: "howToContribute",
        type: "input",
        message: "Please enter a description of how to contribute to this project:"    
    },
    { when: function(answers) {
        return answers.images
        },
        name: "imagesNumber",
        type: "number",
        message: "Please enter the number of images you would like to add to the Images section of your README (e.g., 2)"    
    },    
];
// Function to generate README file in a new folder
function writeToFile(data) {
    fs.writeFile("./README.md", data, (error) => error ? console.log(error) : console.log("Find your README in the main directory of this project!"))
};
// Function to initialize the app:
function init () {
    inquirer.prompt(questions)
    .then((answers) => {  
        const userReadMe = generateMarkdown(answers);
        writeToFile(userReadMe);
    })
    .catch((err) => {
        console.log(err);
    });
};
// Just run node index.js in the command line to call!  
init();
