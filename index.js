const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'company_db'
});

connection.connect((err) => {
    if (err) throw err;
    choices();
  });
  
function choices() {
    inquirer.prompt([
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
                ]
            }
        ]).then((answers) => {
            switch (answers.choices) {
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

const viewEmployees = () => {
    connection.query(
        'SELECT first_name, last_name, role_id, manager_id',
        function(err, res) {
            if (err) throw err;
            console.log(res);
            choices();
        }
    );
};

const viewDepartments = () => {
    connection.query(
        'SELECT department',
        function(err, res) {
            if (err) throw err;
            console.log(res);
            choices();
        }
    );
};

const viewRoles = () => {
    connection.query(
        'SELECT title, salary, department',
        function(err, res) {
            if (err) throw err;
            console.log(res);
            choices();
        }
    );
};


const addEmployee = () => {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'first name:'
        },   
        {
            name: 'last_name',
            type: 'input',
            message: 'last name:'
        },
        {
            name: 'role',
            type: 'input',
            message: 'role:'
        },  
        {
            name: 'manager',
            type: 'input',
            message: 'manager:'
        },        

    ]).then()
};

const addDepartment = () => {
    inquirer
    .prompt([
        {
            name: 'department',
            type: 'input',
            message: 'enter name of new department'
        }
    ]).then
};
const addRole = () => {
    connection.query('')
    inquirer.prompt([
        {
            name: 'role',
            type: 'input',
            message: 'enter new role'
        }

    ])
};


const updateEmployeeRole = () => {}
//     inquirer.prompt ([

//     ]).then connection.query(
//     if (err) throw err;
//     console.log('employee role has been updated');
//     choices();
//     );
// 