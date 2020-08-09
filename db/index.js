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

module.exports = {
    findAllEmployees,
    findAllDepartments,
    findAllRoles
};