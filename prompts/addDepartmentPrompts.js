const inquirer = require('inquirer');
const mysql2 = require('mysql2');

return inquirer
  .prompt([
{
    type: 'text',
    message: 'enter department name',
    name: 'departmentName',
},
])
.then()
//insert department name into table Departments

module.exports = newRole;