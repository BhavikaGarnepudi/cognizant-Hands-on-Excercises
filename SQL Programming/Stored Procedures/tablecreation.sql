-- Accounts Table
CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    AccountType VARCHAR2(20),
    Balance NUMBER(12,2)
);

-- Employees Table
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    Salary NUMBER(12,2),
    DepartmentID NUMBER
);

-- Sample Accounts
INSERT INTO Accounts VALUES (101, 'Savings', 10000);
INSERT INTO Accounts VALUES (102, 'Savings', 5000);
INSERT INTO Accounts VALUES (103, 'Current', 15000);

-- Sample Employees
INSERT INTO Employees VALUES (1, 'John', 50000, 10);
INSERT INTO Employees VALUES (2, 'Mary', 60000, 10);
INSERT INTO Employees VALUES (3, 'David', 55000, 20);

select * from accounts;
select * from employees;
COMMIT;