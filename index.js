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
        'SELECT * FROM employee',
        function(err, res) {
            if (err) throw err;
            console.log(res);
            choices();
        }
    );
};

const viewDepartments = () => {
    connection.query(
        'SELECT * FROM department',
        function(err, res) {
            if (err) throw err;
            console.log(res);
            choices();
        }
    );
};

const viewRoles = () => {
    connection.query(
        'SELECT * FROM role',
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
            name: 'firstName',
            type: 'input',
            message: 'first name:'
        },   
        {
            name: 'lastName',
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

    ]).then((answer) => {
        connection.query('INSERT INTO employee_table (first_name, last_name, role, manager) VALUES ?',
        {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role: answer.role,
            manager: answer.manager

        })
    })
};

const addDepartment = () => {
    inquirer.prompt([
        {
            name: 'department',
            type: 'input',
            message: 'enter name of new department'
        }
    ]).then((answer) => {
        connection.query('INSERT INTO departmen_table (department) VALUES ?',
        {
            department: answer.department,
        })
    })
};
const addRole = () => {
    inquirer.prompt([
        {
            name: 'role',
            type: 'input',
            message: 'enter new role'
        },
        {
            name: 'salary',
            type: 'input',
            message: "enter salary"
        },
        {
            name: 'departmentID',
            type: 'input',
            message: 'enter department id'
        }
    ]).then((answer) => [
        connection.query('INSERT INTO role_table (title, salary, department_id) VALUES ?',
        {
            title: answer.role,
            salary: answer.salary,
            department_id: answer.departmentID
        })
    ])
};


const updateEmployeeRole = () => {
    connection.query('')
    inquirer.prompt([
        {
            name: 'role',
            type: 'input',
            message: 'enter new title'
        },
    ]).then
}
