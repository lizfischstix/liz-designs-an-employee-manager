const inquirer = require('inquirer');
const mysql2 = require('mysql2');

return inquirer
  .prompt([
{
    type: 'text',
    message: 'enter the name of the role',
    name: 'newRoleName',
},
{
    type:'text',
    message:'enter the annual salery for the role',
    name: 'newRoleSalery',
},
{
    type:'text',
    message: 'enter the department for the role',
    name: 'newRoleDepartment',
},    
])
.then()
//insert role name, role salery, role department into table roles

module.exports = newRole;