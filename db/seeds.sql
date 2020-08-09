use employees;

INSERT INTO department
    (name)
VALUES
    ('Vocals'),
    ('Guitars'),
    ('Percussion'),
    ('Roadies');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Lead Singer', 200000, 1),
    ('Backing Vocals', 90000, 1),
    ('Lead Guitar', 175000, 2),
    ('Rhythm Guitar', 150000, 2),
    ('Drummer', 165000, 3),
    ('Cowbell', 120000, 3),
    ('Truck Driver', 275000, 4),
    ('Roadie', 200000, 4);

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