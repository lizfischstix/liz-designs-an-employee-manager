const inquirer = require('inquirer');
const mysql2 = require('mysql2');

return inquirer
  .prompt([
{
    type: 'list',
    message: 'which employee would you like to update',
    // choices: [need help with this.  how do I pull all names from from DB? to inquirer?]
    name: 'empUpdate',
},
{
    type:'text',
    message:'enter employees new role',
    name: 'empNewRole',
},  
])
.then()
//put updated info in Table employees

module.exports = empNewRole;