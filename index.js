const Employee = require("./lib/Employee");
const department = require("./lib/department");
const role = require("./lib/role");
const inquirer = require("inquirer");

async function start() {
return await inquirer
    .prompt([
        /* Passing questions for command-line prompt starting off with Department Section*/
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
}






const init = async () => {
  //shift option down to copy multiline
  // const {name, id, email, officeNumber} = await start()
  // const {username, roles} = await engineerPrompt()
  // const { School, roles:interroles } = await interPrompt()
  start();
};

init();