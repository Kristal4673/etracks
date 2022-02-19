var inquirer = require("inquirer");
inquirer
    .prompt([
        /* Passing questions for command-line prompt here in object */
        {
            name: `id`,
            message: " What would you like to do?",
            type: "input",
        },
        {
            name: `name`, // to hold dept name 
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
            console.log(error)
        } else {
            // Something else went wrong
        }
    });
