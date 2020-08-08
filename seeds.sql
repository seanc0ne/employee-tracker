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
    