const connection = require("./connection");

const findAllEmployees = () => {
    console.log('Finding all the employees...\n');
    return connection.promise().query('SELECT * FROM employee');
}

module.exports = {
    findAllEmployees
};