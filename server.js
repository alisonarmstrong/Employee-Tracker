const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host:
    port:
    user:
    password:
    database:
});

function choices() {
    inquirer
        .prompt([
            {
                name: 'choices',
                type: 'list',
                message: 'what would you like to do?',
                choices: [
                    'View Employees',
                    'View Departments',
                    'View Roles',
                    'Add Employee',
                    'Add Department',
                    'Add Role',
                    'Update Employee Role',
                    'Exit'
                ]
            }
        ])
        .then(answers => {
            switch (answers.choice) {
                case 'View Employees':
                    viewEmployees();
                    break;
                case 'View Departments':
                    viewDepartments();
                    break;
                case 'View Roles':
                    viewRoles();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();            
            }
        });
}