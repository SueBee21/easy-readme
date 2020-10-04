const inquirer = require('inquirer');
const axios = require("axios");
const generateMarkdown = require("./generateMarkdown.js");
const fs = require("fs");
// array of questions for user
const questions = [
{
    type: "input",
    message: "What is your Title?",
    name: "title"
},
{
    type: "input",
    message: "Write a description of your project",
    name: "description"
},
{
    type: "input",
    message: "What dependencies are needed to install for this application?",
    name: "installation"
},
{
    type: "input",
    message: "What is this application used for?",
    name: "usage"
},
{
    type: "input",
    message: "credits",
    name: "credits"
},
{   
    type: "list",
    message: "Select a license to use",
    choices: ["MIT", "IBM", "Apache"],
    name: "license"
},
{
    type: "list",
    message: "Select badges to use",
    choices: ["Last Commit", "Pull Request", "Issues"],
    name: "badge"
},
{
    type: "input",
    message: "List any contributors to the project",
    name: "contributing"
},
{
    type: "input",
    message: "List information on test cases",
    name: "testing"
},
{
    type: "input",
    message: "What is your GitHub username?",
    name: "githubUsername"
},
{
    type: "input",
    message: "What is your e-mail address?",
    name: "email"
},

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error){
        if (error){
            throw error 
        }
        console.log("Success!")
    })
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(data){
    axios.get("https://api.github.com/users/" + data.githubUsername).then(function(response){
        data.githubProfile=response.data.html_url
        const content=generateMarkdown(data)
        writeToFile("README.md", content)
    })
})
}

// function call to initialize program
init();
