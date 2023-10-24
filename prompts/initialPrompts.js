const inquirer = require('inquirer');
const mysql2 = require('mysql2');

return inquirer
.prompt([
{
    type: 'List',
    message: 'What would you like to do today?',
    choices: ['view all employees', 'add employee', 'view all roles', 'add role', 'view all departments', 'add department', 'quit'],
    name: 'start_menu',
 },
])
.then()
//swithch statement to approprate prompts file?
module.exports = start_menu;