const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();

//////////////////

inquirer
  .prompt([
    {
      type: "input",
      message: "What the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the code in this repository about",
      name: "description",
    },
    {
      type: "input",
      message: "What steps are needed to install your repository if any?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is your application used for?",
      name: "usage",
    },
    {
      type: "list",
      name: "License",
      message: "What license would you like to use if any?",
      choices: [
        "mit",
        "apache-2.0",
        "gpl-3.0",
        "bsd-2-clause",
        "bsd-3-clause",
        "mpl-2.0",
        "lgpl-3.0",
        "agpl-3.0",
        "unlicense",
        "wtfpl",
      ],
    },
    {
      type: "input",
      message: "Who or what has contributed to your repository if at all? ",
      name: "contributing",
    },
    {
      type: "input",
      message:
        "Describe any tests that have been implemented for your project.",
      name: "tests",
    },
    {
      type: "input",
      message: "Where can the reader contact you about any questions?",
      name: "questions",
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log("README Successfully created!")
      : console.log(
          "There has been an error. Please check your answers and try again!"
        )
  );
// console.log(path.join(__dirname), 'readme.md');
