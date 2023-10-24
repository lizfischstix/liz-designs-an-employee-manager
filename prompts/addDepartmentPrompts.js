const inquirer = require('inquirer');
const mysql2 = require('mysql2');

function newDepartment(){
return inquirer
  .prompt([
{
    type: 'text',
    message: 'enter department name',
    name: 'departmentName',
},
])
}

module.exports = newDepartments;