const inquirer = require('inquirer');
const mysql2 = require('mysql2');

function addDepartment(){
  return inquirer
    .prompt([
{
    type: 'text',
    message: 'enter department name',
    name: 'departmentName',
},
])
}



module.exports = addDepartment;