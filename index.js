const mysql = require('mysql');
const inquirer = require('inquirer');
const { identity } = require('rxjs');

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
        function (err, res) {
            if (err) throw err;
            console.table(res);
            choices();
        }
    );
};

const viewDepartments = () => {
    connection.query(
        'SELECT * FROM department',
        function (err, res) {
            if (err) throw err;
            console.table(res);
            choices();
        }
    );
};

const viewRoles = () => {
    connection.query(
        'SELECT * FROM role',
        function (err, res) {
            if (err) throw err;
            console.table(res);
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
        connection.query('INSERT INTO employee SET ?',
            {
                first_name: answer.firstName,
                last_name: answer.lastName,
                role_id: answer.role,
                manager_id: answer.manager

            }, function (err, res) {
                if (err) throw err;
                console.log(res);
                choices();
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
        connection.query('INSERT INTO department SET ?',
            {
                department_name: answer.department,
            }, function (err, res) {
                if (err) throw err;
                console.log(res);
                choices();
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
        connection.query('INSERT INTO role SET ?',
            {
                title: answer.role,
                salary: answer.salary,
                department_id: answer.departmentID
            }, function (err, res) {
                if (err) throw err;
                console.log(res);
                choices();
            })
    ])
};


const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            name: 'employee_id',
            type: 'input',
            message: 'enter employee id number:'
        },
        {
            name: 'new_role_id',
            type: 'input',
            message: 'enter new role id:'
        },
    ]).then(employeeUpdate => {
        connection.query('UPDATE employee SET ? WHERE ?',
            [{
                role_id: employeeUpdate.new_role_id,
            },
            {
                id: employeeUpdate.employee_id,
            }], function (err, res) {
                if (err) throw err;
                console.log(res);
                choices();
            })
    })
}
