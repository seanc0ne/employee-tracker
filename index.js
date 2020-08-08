const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require ("./db");
require("console.table");

init();

function init () {
    const logoText = logo({ name: Employee Tracker" }).render();

    console.log(logoText);

    loadMainPrompts();
}

function loadMainPrompts() {
    prompt ({
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?"
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Employees By Department",
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                },
                {
                    name: "View All Employees By Manager",
                    value: "VIEW_EMPLOYEES_BY_MANAGER"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Remove Employee",
                    value: "REMOVE_EMPLOYEE"
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "Update Employee Manager",
                    value: "UPDATE_EMPLOYEE_MANAGER"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Remove Department",
                    value: "REMOVE_DEPARTMENT"
                },
                {
                    name: "Remove Role",
                    value: "REMOVE_ROLE"
                },
                {
                    name: "View Budget",
                    value: "VIEW_BUDGET"
                },
                {
                    Name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    }).then(res => {
        let choice = res.choice;
        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "VIEW_EMPLOYEES_BY_DEPARTMENT":
                viewEmployeesByDepartment();
                break;
            case "VIEW_EMPLOYEES_BY_MANAGER":
                viewEmployeesByManager();
                break;
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
            case "REMOVE_EMPLOYEE":
                removeEmployee();
                break;
            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRole();
                break;
            case "UPDATE_EMPLOYEE_MANAGER":
                updateEmployeeManager();
                break;
            case "VIEW_DEPARTMENTS":
                viewDepartments();
                break;
            case "ADD_DEPARTMENT":
                addDepartment();
                break;
            case "REMOVE_DEPARTMENT":
                removeDepartment();
                break;
            case "VIEW_BUDGET":
                viewBudget();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "ADD_ROLE":
                addRole();
                break;
            case "REMOVE_ROLE":
                removeRole();
                break;
            default:
                quit();
        }
    })
}

function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);
        })
        .then(() => loadMainPrompts());
}

function viewEmployeesByDepartment() {
    db.findAllDepartments(
        .then(([rows]) => {
            let departments = rows;
            const departmentChoices = departments.map(({ id, name }) => ({
                name: name,
                value: id
            }));

            prompt([
                {
                    type: "list",
                    name: "departmentId",
                    message: "What department would you like to see the employees for?",
                    choices: departmentChoices
                }
            ])
                .then(res => db.findAllEmployeesByDepartment(res.departmentId))
                .then(([rows]) => {
                    let employees = rows;
                    console.log("\n");
                    console.table(employees);
                })
                .then(() => loadMainPrompts())
        })
    );
}

function viewEmployeesByManager() {
    db.findAllEmployees()
    .then(([rows]) => {
        let managers = rows;
        const managerChoices = managers.map(({ id, first_name, last_name, }) => ({
            name: `${first_name} ${last_name}`,
            value: id
        }));

        prompt([
            {
                type: "list",
                name: "managerId",
                message: "Which employee would you like to see direct recports for?",
                choices: managerChoices
            }
        ])
            .then(res => db.findAllEmployeesByManager(res.managerId))
            .then(([rows]) => {
                let employees = rows;
                console.log("\n");
                if (employees.length === 0) {
                    console.log("This employee has no direct reports");
                } else {
                    console.table(employees);
                }
            })
            .then(() => loadMainPrompts())
    });
}

function removeEmployee() {
    db.findAllEmployees()
        .then(([rows}) => {
            let employees = rows;
            const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
                name: `${first_name} ${last_name}`,
                value: id
            }));

            prompt([
                {
                    type: "list",
                    name: "employeeId",
                    message: "Which employee would you like to remove?",
                    choices: employeeChoices
                }
            ])
                .then(res => db.removeEmployee(res.employeeId))
                .then(() => console.log("Removed employee from the database"))
                .then(() => loadMainPrompts())
        }]))
}

function updateEmployeeRole() {
    db.findAllEmployees()
        .then(([rows}) => {
            let employees = rows;
            const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
                name: `${first_name} ${last_name}`,
                value: id
            }));

            prompt([
                {
                    type: "list",
                    name: "employeeId",
                    message: "Which employee's role would you like to update?",
                    choices: employeeChoices
                }
            ])
                .then(res => {
                    let employeeId = res.employeeId;
                    db.findAllRoles()
                        .then(([rows]) => {
                            let roles = rows;
                            const roleChoices = roles.map(({ id, title }) => ({
                                name: title
                                value: id
                            }));

                            prompt([
                                {
                                    type: "list",
                                    name: "roleId",
                                    message: "What role would you like to give the selected employee?",
                                    choices: roleChoices
                                }
                            ])
                                .then(res => db.updateEmployeeRole(employeeId, res.roleId))
                                .then(() => console.log("Employee's role updated"))
                                .then(() => loadMainPrompts())
                        });
                });
        })

function updateEmployeeManager() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: id
        }));

        prompt([
            {
                type: "list",
                name: "employeeId",
                message: "Which employee's manager would you like to update?",
                choices: employeeChoices
            }
        ])
            .then(res => {
                let employeeId = res.employeeId
                db.findAllPossibleManagers(employeeId)
                    .then(([rows]) => {
                        let managers = rows;
                        
                    })
            })
    })
}