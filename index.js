// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username? (no '@' needed)",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
    {
        type: 'input',
        name: 'motivation',
        message: "What was your motivation to create this project?",
    },
    {
        type: 'input',
        name: 'problemSolve',
        message: "What problem does it solve?",
    },
    {
        type: 'input',
        name: 'learning',
        message: "What did you learn creating this project?",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please provide installation steps for your project.",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide examples for use of your deployed application.",
    },
    {
        type: 'list',
        name: 'license',
        message: "Which license will you use for your project?",
        choices: ['agpl', 'apache', 'mit', 'ISC', 'no license'],
    },
    {
        type: 'input',
        name: 'contributersRules',
        message: "Please enter the rules for contributors.",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please provide information on how to test the application.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`README.md`, data, err => {
        if (err) {
            return console.log(error);
        } else {
            return console.log("Your Readme file was successfully created!")
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    .then(answers => generateMarkdown(answers))
    .then(generatedReadme => writeToFile('README.md', generatedReadme))
    .catch(err => {
        console.log(err);
    });
