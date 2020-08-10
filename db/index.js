const connection = require("./connection");

const findAllEmployees = () => {
    console.log('Finding all employees...\n');
    return connection.promise().query(`SELECT 
    e.id, e.first_name, e.last_name, e.role_id, e.manager_id, r.title, r.salary, r.department_id
    FROM employee as e
    INNER JOIN role AS r
    ON r.id = e.role_id
    INNER JOIN department AS d
    ON d.id = r.department_id
    GROUP BY e.id`);
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

const updateEmployeeRole = (employeeId, roleId) => {
    console.log('Updating employee role...\n');
    return connection.promise().query(`UPDATE employee SET role_id = ${roleId} WHERE id = ${employeeId}`);
}

const viewDepartments = () => {
    console.log('Viewing all departments...\n');
    return connection.promise().query(`SELECT * FROM department`);
}

module.exports = {
    findAllEmployees,
    findAllDepartments,
    findAllRoles,
    findAllEmployeesByDepartment,
    findAllEmployeesByManager,
    updateEmployeeRole,
    viewDepartments
};