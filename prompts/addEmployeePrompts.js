const inquirer = require('inquirer');
const mysql2 = require('mysql2');

function addEmployee(){
return inquirer
  .prompt([
{
    type: 'text',
    message: 'enter employees first name',
    name: 'empFirstName',
},
{
    type: 'text',
    message: 'enter employees last name',
    name: 'empLastName',
},
{
        type: 'text',
        message: 'enter employees role id',
        name: 'empRole',
},    
{
    type: 'text',
    message: 'enter employees manager id',
    name: 'empManager',
},
])
}

//insert emp first name, emp last name, salery, manager into table employees

module.exports = addEmployee;