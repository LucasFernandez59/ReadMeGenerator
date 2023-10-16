// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Choose a license for your project',
        choices: ['GPL', 'Apache', 'Mozilla', 'MIT'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter your github username',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
            err ? console.error(err) : console.log('created README')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
            questions
        )
        .then((data => writeToFile("README.md", data))
        );
};

// Function call to initialize app
init();
