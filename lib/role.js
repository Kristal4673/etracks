var inquirer = require("inquirer");
inquirer
  .prompt([
    /* Passing questions for command-line prompt here in object */
    {
      name: `postion`,
      message: " What would you like to do?",
      type: "input",
    },
    {
      name: `name`, //to hold role title
      message: "What is the name of the department",
      type: "input",
    },
    {
      name: `salary`, //to hold the role salary
      message: "What would you like to do?",
      type: "input",
    },

    {
      name: ` department_id`,
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
