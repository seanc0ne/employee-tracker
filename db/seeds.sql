use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (titles, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Belinda', 'Carlisle', 1, NULL),
    ('Kathy', 'Valentine', 2, 1),
    ('Jane', 'Wiedlin', 3, NULL),
    ('Gina', 'Schock', 4, 3), 
    ('Charlotte', 'Caffey', 5, NULL),
    ('Keren', 'Woodward', 6, 5),
    ('Siobhan', 'Fahey', 7, NULL),
    ('Sara', 'Dallin', 8, 7);