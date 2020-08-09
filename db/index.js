const connection = require("./connection");

const findAllEmployees = () => {
    console.log('Finding all employees...\n');
    return connection.promise().query('SELECT * FROM employee');
}

const findAllDepartments = () => {
    console.log('Finding all departments...\n');
    return connection.promise().query('SELECT * FROM department');
}

const findAllRoles = () => {
    console.log('Finding all roles...\n');
    return connection.promise().query('SELECT * FROM role');
}

const findAllEmployeesByDepartment = (departmentId) => {
    console.log('Finding employees by department...\n');
    return connection.promise().query(`SELECT * FROM employee WHERE role_id IN 
    (SELECT id FROM role WHERE department_id = ${departmentId})`);
}

const findAllEmployeesByManager = (managerId) => {
    console.log('Finding employees by manager...\n');
    return connection.promise().query(`SELECT * FROM employee WHERE manager_id = ${managerId}`);
}

module.exports = {
    findAllEmployees,
    findAllDepartments,
    findAllRoles,
    findAllEmployeesByDepartment,
    findAllEmployeesByManager
};