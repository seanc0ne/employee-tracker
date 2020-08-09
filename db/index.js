const connection = require("./connection");

const findAllEmployees = () => {
    console.log('Finding all the employees...\n');
    return connection.promise().query('SELECT * FROM employee');
}

const viewAllDep = () => {
    console.log('Viewing all departments...\n');
    
}

module.exports = {
    findAllEmployees
};