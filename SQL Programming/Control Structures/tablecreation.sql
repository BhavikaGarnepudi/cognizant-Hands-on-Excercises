-- Create Customers Table
CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER(12,2),
    IsVIP VARCHAR2(5)
);

-- Create Loans Table
CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER(5,2),
    DueDate DATE,
    CONSTRAINT fk_customer
        FOREIGN KEY (CustomerID)
        REFERENCES Customers(CustomerID)
);

-- Insert Sample Customers
INSERT INTO Customers VALUES (1, 'John', 65, 15000, 'FALSE');
INSERT INTO Customers VALUES (2, 'Mary', 45, 8000, 'FALSE');
INSERT INTO Customers VALUES (3, 'David', 70, 20000, 'FALSE');

-- Insert Sample Loans
INSERT INTO Loans VALUES (101, 1, 10.00, SYSDATE + 20);
INSERT INTO Loans VALUES (102, 2, 12.00, SYSDATE + 40);
INSERT INTO Loans VALUES (103, 3, 11.00, SYSDATE + 10);

COMMIT;