const mysql = require('mysql2');
const inquirer = require('inquirer');
const initialPrompt = require('./prompts/initialPrompts');
const addEmployee = require('./prompts/addEmployeePrompts');
// const NewDepartment = require('./prompts/addDepartmentPrompts');
const addOneRole = require('./prompts/addRolePrompts');

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: 'rootroot',
    database: 'employeeManager_db'
  },
  console.log(`Connected to the employeeManager_db database.`)
);

initialPrompt()
  .then(ans => {
    console.log(ans)

    switch (ans.start_menu) {
      case 'view all roles':
        allRoles();
        break;

      case 'view all employees':
        allEmployees();
        break;

      case 'view all departments':
        allDepartments();
        break;

      case 'add employee':
        addOneEmployee();
        break;

      case 'add department':
        addDepartment();
        break;

      case 'add role':
        addNewRole()
        break;
      
      case 'quit':
        console.log('Exiting the application...');
        process.exit(0);
       break;

      default:
        break;
    }

  })


function allRoles() {

  db.query('SELECT * FROM roles', function (err, results) {
    console.table(results);
    initialPrompt();
  });
}

function allEmployees() {

  db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
    initialPrompt();
  });
}

function allDepartments() {

  db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
    initialPrompt();
  });
}

function addOneEmployee() {
  addEmployee()
    .then(ans => {
      console.log(ans);
      let { empFirstName, empLastName, empRole, empManager } = ans
      db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`, [empFirstName, empLastName, empRole, empManager], function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      })
    })
}

function addNewDepartment() {
  addDepartment()
    .then(ans => {
      console.log(ans);
      let { departmentName } = ans
      db.query(`INSERT INTO department (department_name) VALUES (?)`, [departmentName], function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      })
    })
}

function addNewRole() {
  addOneRole()
    .then(ans => {
      console.log(ans);
      let { newRoleName, newRoleSalery, newRoleDepartment } = ans
      db.query(`INSERT INTO roles (title, salery, department_id) VALUES (?,?,?)`, [newRoleName, newRoleSalery, newRoleDepartment], function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      })
    })
}

//INSERT INTO employee (first_name, last_name, role_id, manager_id)
