-- previous day temperature more
select T2.id from Weather T1, Weather T2 where T2.temperature > T1.temperature and DATEDIFF(T2.recordDate, T1.recordDate) = 1;

-- Table: Employees

-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | name          | varchar |
-- +---------------+---------+
-- id is the primary key (column with unique values) for this table.
-- Each row of this table contains the id and the name of an employee in a company.
 

-- Table: EmployeeUNI

-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | unique_id     | int     |
-- +---------------+---------+
-- (id, unique_id) is the primary key (combination of columns with unique values) for this table.
-- Each row of this table contains the id and the corresponding unique id of an employee in the company.
 

-- Write a solution to show the unique ID of each user, If a user does not have a unique ID replace just show null.

select u.unique_id, e.name from Employees e left join EmployeeUNI u on u.id = e.id;
select u.unique_id, e.name from Employees as e left join EmployeeUNI as u on u.id = e.id;


select e1.name, b1.bonus from Employee e1 left outer join Bonus b1 on e1.empId = b1.empId where b1.bonus < 1000 or b1.bonus is null
