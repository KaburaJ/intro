--Weekend Chalenge
CREATE DATABASE LibraryManagement
USE LibraryManagement

--Tables
CREATE TABLE Books(
	BookID INT PRIMARY KEY,
	Title VARCHAR(50),
	Author VARCHAR(50),
	PublicationYear INT,
	Status VARCHAR(50)
);

CREATE TABLE Members(
	MemberID INT PRIMARY KEY,
	Name VARCHAR(50),
	Address VARCHAR(50),
	ContactNumber INT	

);

CREATE TABLE Loans(
	LoanID INT PRIMARY KEY,
	BookID INT,
	MemberID INT,
	LoanDate DATE,
	ReturnDate DATE,
	FOREIGN KEY (BookID) REFERENCES Books(BookID),
	FOREIGN KEY (MemberID) REFERENCES Members(MemberID)

);

--Data
INSERT INTO Books(BookID, Title, Author, PublicationYear, Status)
VALUES
(5, 'Kigogo', 'Asumpta', 2022, 'Loaned'),
(6, 'Hope', 'Theo', 2020, 'Loaned'),
(7, 'Hope', 'Theo', 2020, 'Loaned'),
(8, 'Hope', 'Theo', 2020, 'Loaned');
INSERT INTO Members(MemberID, Name, Address, ContactNumber)
VALUES
(1, 'John H', '124 M Street', '1234567890'),
(2, 'Daniel J', '123 K Street', '1234569890');

INSERT INTO Loans(LoanID, BookID, MemberID, LoanDate, ReturnDate)
VALUES
(1, 1, 1, '2023-06-01', '2023-06-15'),
(2, 2, 1, '2023-12-11', '2013-08-18'),
(3, 1, 1, '2023-06-01', '2023-06-15'),
(4, 2, 1, '2023-12-11', ''),
(5, 1, 1, '2023-06-01', '2023-06-15'),
(6, 2, 1, '2023-12-11', ''),
(7, 1, 1, '2023-06-01', '2023-06-15'),
(8, 2, 1, '2023-12-11', ''),
(9, 1, 1, '2023-06-01', '2023-06-15'),
(10, 2, 2, '2023-12-11', '2013-08-18'),
(11, 1, 2, '2023-06-01', '2023-06-15'),
(12, 2, 2, '2023-12-11', ''),
(13, 1, 2, '2023-06-01', '2023-06-15'),
(14, 2, 2, '2023-12-11', ''),
(15, 1, 2, '2023-06-01', '2023-06-15'),
(16, 2, 2, '2023-12-11', '');


SELECT * FROM Loans
SELECT * FROM Books
SELECT * FROM Members

--Tasks

--CTEs query to retrieve members who have borrowed at least 3 books
WITH NumMembersBorrowedBooks AS (
  SELECT MemberID, COUNT(*) AS NumBooks
  FROM Loans
  GROUP BY MemberID
  HAVING COUNT(*) >= 3
)
SELECT Members.Name, NumBooks
FROM Members
JOIN NumMembersBorrowedBooks ON Members.MemberID = NumMembersBorrowedBooks.MemberID;



--Trigger that automatically updates the "Status" column in the "Books" table whenever a book is loaned or returned.
CREATE TRIGGER BookStatus ON Books
AFTER UPDATE
AS
BEGIN
	IF UPDATE(Status)
	BEGIN 
		UPDATE b 
		SET b.Status = CASE
			WHEN i.Loaned IS NOT NULL THEN 'Loaned'
			WHEN i.Loaned IS NULL THEN 'Available'
			ELSE b.Status
		END
		FROM Books b
		INNER JOIN inserted i ON b.BookID = i.BookID
	END
END



