// TODO: Include packages needed for this application


const{prompt} = require("inquirer")
const generateLogo = require("./lib/generateLogo.js")
const fs = require("fs")

// TODO: Create an array of questions for user input
// Logo generator needs: shape options, up to 3 characters, and text color (color name or hexidecimal)

const questions = [
    {
        type:"input",
        name:"file_name",
        message:"What would you like your file name to be?"
    },
    {
        type:"list",
        name:"logoShape",
        message:"What shape would you like your logo to be?",
        choices:["Triangle", "Square", "Circle"]
    },
    {
        type:"",
        name:"logoColor",
        message:"Please enter the color name or hexidecimal number you would like your logo to be"
    },
    {
        type:"input",
        name:"logoCharacters",
        message:"Please enter 1-3 characters for your custom logo"
    }
];

//This function writes the SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if (err){console.log(err)}
        console.log("Logo created")
    })
}

//This function initializes the app
function init() {
    prompt(questions)
    .then((answers)=>{console.log(answers)
        writeToFile(`./${answers.file_name}.svg`, generateLogo(answers))
    })
}

//This invokes the function
init();