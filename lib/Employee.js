var inquirer = require("inquirer");
inquirer
    .prompt([
        /* Passing questions for command-line prompt here in object */
        {
            name: "todo",
            message: " What would you like to do?",
            type: "input",
        },
        {
            name: "dept",
            message: "What is the name of the department",
            type: "input",
        },
        {
            name: "roles",
            message: "What would you like to do?",
            type: "input",
        },
        {
            name: "cust",
            message: "What is the name of the role?",
            type: "input",
        },
        {
            name: "Num",
            message: "What is the salary of the role?",
            type: "input",
        },
        {
            name: "belong",
            message: "Which department does the role belong to?",
            type: "input",
        },
        {
            name: "Add",
            message: "What would you like to do?",
            type: "input",
        },
        {
            name: "firstname",
            message: "What is the employee's first name?",
            type: "input",
        },
        {
            name: "lastname",
            message: "What is the employees lastname?",
            type: "input",
        },
        {
            name: "labeling",
            message: "What is the employee's role?",
            type: "input",
        },
        {
            name: "Service",
            message: "Who is the employees manager?",
            type: "input",
        },
        {
            name: "Update",
            message: "What would you like to do?",
            type: "input",
        },
        {
            name: "role",
            message: "Which employee's role do you want to update?",
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
