var inquirer = require("inquirer");
inquirer
    .prompt([
        /* Passing questions for command-line prompt here in object */
        {
            id: `INT PRIMARYKEY`,
            message: " What would you like to do?",
            type: "input",
        },
        {
            name: `VARCHAR(30)`, // to hold dept name 
            message: "What is the name of the department",
            type: "input",
        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        // {{input}}
        console.log(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
