USE BikeStores

--SELECT * FROM sales.order_items
--SELECT * FROM sales.customers
--SELECT * FROM sales.staffs
--SELECT * FROM production.products
--SELECT * FROM production.stocks



--Query to retrieve the list of orders along with the customer name and staff name for each order.
SELECT 
	order_id, 
	c.first_name, 
	s.first_name
FROM sales.orders o
JOIN sales.customers c ON o.customer_id = c.customer_id
JOIN  sales.staffs s ON o.staff_id = s.staff_id
GO


-- A query to find the top 5 customers who have placed the most orders

SELECT TOP (5) c.first_name, COUNT(*) AS order_count
FROM sales.orders o
JOIN sales.customers c ON o.customer_id = c.customer_id
GROUP BY c.first_name
ORDER BY order_count DESC



--A view that returns the total quantity and sales amount for each product
/*CREATE VIEW quantitySales AS
SELECT 
	p.product_id,
	p.list_price,
	SUM(s.quantity) AS total_quantity,
	SUM(s.quantity * p.list_price) AS sales_amount
FROM production.products p
JOIN production.stocks s ON p.product_id = s.product_id
GROUP BY p.product_id, p.list_price;
GO
SELECT * FROM quantitySales
*/

CREATE VIEW quantitySale AS
SELECT 
	p.product_id,
	p.list_price,
	SUM(s.quantity) AS total_quantity,
	SUM(s.quantity * (p.list_price-(p.list_price*p.discount))) AS sales_amount
FROM sales.order_items p
JOIN production.stocks s ON p.product_id = s.product_id
GROUP BY p.product_id, p.list_price;
GO

SELECT * FROM quantitySale




--A view that shows the product details along with the total sales quantity and revenue for each product

CREATE VIEW [SalesQuantity] AS
SELECT 
	s.product_id, 
	p.product_name,
	COUNT(s.quantity) AS sales_count,
	SUM(s.quantity) AS total_sales,
	SUM(s.quantity * (p.list_price-(p.list_price*s.discount))) AS revenue
FROM sales.order_items s
JOIN production.products P ON s.product_id = p.product_id
GROUP BY s.product_id , p.product_name
--ORDER BY s.product_id DESC
GO

SELECT * FROM [SalesQuantity]





--A stored procedure that accepts a customer ID and returns the total number of orders placed by that customer
CREATE PROCEDURE CustomerOrders @customerID INT
AS
BEGIN
	SELECT COUNT(*) AS order_count
	FROM sales.orders o
	JOIN sales.customers c ON o.customer_id = c.customer_id
	WHERE o.customer_id = @customerID;
END;

EXEC CustomerOrders @customerID = 1;