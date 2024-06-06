USE tiendaonline;

CREATE TABLE CLIENTES (
NOMBRE VARCHAR (15),
APELLIDO VARCHAR (15),
ID  INT NOT NULL PRIMARY KEY,
EMAIL VARCHAR (20),
TELEFONO INT (10)
);

CREATE TABLE PROVEEDORES (
ID INT NOT NULL PRIMARY KEY,
NOMBRE VARCHAR (15),
EMAIL VARCHAR (20),
TELEFONO INT (10)
);

CREATE TABLE PRODUCTOS (
NOMBRE VARCHAR (10) NOT NULL, 
PRECIO DECIMAL (10, 2),
STOCK INT,
NOMBRE_PROVEEDOR INT,
FOREIGN KEY (ID_PROVEEDOR) REFERENCES PROVEEDORES(ID),
PRIMARY KEY (NOMBRE)
);

CREATE TABLE VENTAS (
VENTA_ID INT PRIMARY KEY AUTO_INCREMENT,
CLIENTE_ID INT,
NOMBRE_PRODUCTO VARCHAR (10),
FECHA DATE,
CANTIDAD INT,
PRECIO_TOTAL DECIMAL (10, 2),
FOREIGN KEY (CLIENTE_ID) REFERENCES CLIENTES(ID),
FOREIGN KEY (NOMBRE_PRODUCTO) REFERENCES PRODUCTOR(NOMBRE)
);

#insertar clientes 
INSERT INTO CLIENTES (NOMBRE, APELLIDO, ID, EMAIL, TELEFONO) VALUES
('María', 'García', 4586, 'marcia@example.com', 5534567),
('Juan', 'Martínez', 2156, 'jez@example.com', 5876543),
('José', 'López', 3486, 'jpez@example.com', 5557823),
('Ana', 'Hernández', 4846, 'ana.ez@example.com', 5556789),
('Carlos', 'Rodríguez', 5568, 'cdriguez@example.com', 5345678),
('Sofía', 'González', 6651, 'onzalez@example.com', 5501234),
('Pedro', 'Díaz', 8467, 'pe@example.com', 5554567),
('Laura', 'Sánchez', 45638, 'lnchez@example.com', 5589012),
('Miguel', 'Pérez', 9768, 'migrez@example.com', 5559012),
('Elena', 'Fernández', 10668, 'elena@example.com', 5551234);

#insertar proveedores
INSERT INTO PROVEEDORES (ID, NOMBRE, EMAIL, TELEFONO) VALUES
(1020, 'Solutions S.A.', 'info@tutions.com', 5551237),
(2010, 'GlobalTrade.', 'info@globade.com', 5552378),
(3010, 'InnovaTech.', 'info@ivatech.com', 556789),
(4010, 'EcoProducts', 'info@ecoducts.com', 5557890),
(5510, 'StarSoft', 'info@ssoft.com', 5555671),
(6810, 'FirstClass', 'info@ficlass.com', 5589012),
(7010, 'AlphaTech', 'info@alphh.com', 5557123),
(8010, 'BrightIdeas', 'info@brights.com', 5901234),
(9010, 'GlobalTech', 'info@global.com', 5552345),
(1001, 'SmartSystems', 'info@smartsy.com', 5123456);

#insertar productos
INSERT INTO PRODUCTOS (NOMBRE, PRECIO, STOCK, ID_PROVEEDOR) VALUES
('Laptop', 899.99, 50, 1001),
('Teléfono', 499.99, 100, 1020),
('Tablet', 299.99, 75, 2010),
('Impresor', 199.99, 30, 3010),
('Teclado', 49.99, 80, 4010),
('Mouse', 19.99, 120, 5510),
('Auricular', 79.99, 60, 6810),
('Monitor', 249.99, 40, 7010),
('Router', 129.99, 25, 8010),
('Cámara', 349.99, 35, 9010);

#insertar ventas
INSERT INTO VENTAS (VENTA_ID, CLIENTE_ID, NOMBRE_PRODUCTO, FECHA , CANTIDAD, PRECIO_TOTAL) VALUES
(1, '2156', 'Laptop', '2024-05-01', 2, 1799.98),
(2, '3486', 'Teléfono', '2024-05-02', 3, 1499.97),
(3, '4586', 'Tablet', '2024-05-03', 1, 299.99),
(4, '4846', 'Impresor', '2024-05-04', 4, 799.96),
(5, '5568', 'Teclado', '2024-05-05', 2, 99.98),
(6, '6651', 'Mouse', '2024-05-06', 5, 99.95),
(7, '8467', 'Auricular', '2024-05-07', 3, 239.97),
(8, '9768', 'Monitor', '2024-05-08', 1, 249.99),
(9, '10668', 'Router', '2024-05-09', 2, 259.98),
(10, '45638', 'Cámara', '2024-05-10', 1, 349.99);

#TRIGGER REDUCIR STOCK
delimiter//
CREATE TRIGGER actualizar_stock AFTER INSERT ON ventas
FOR EACH ROW 
BEGIN
    UPDATE productos 
    SET Stock = Stock - NEW.cantidad
    WHERE nombre = NEW.nombre_producto;
END//;

#ACTUALIZAR COMPRAS 
delimiter //
create trigger actualizar_compras after insert on ventas 
for each row begin
	update clientes 
    set cantidadCompras = cantidadCompras + 1
    where id = NEW.CLIENTE_ID;
END//;

#actualizar null a 0
UPDATE clientes SET cantidadCompras = 0 WHERE cantidadCompras IS NULL;

#anadir direcciones
alter table clientes add column direccion varchar (30);

#anadir fechas
alter table clientes add column fecha_registro timestamp default current_timestamp;


mysql> #insertar ventas
mysql> INSERT INTO VENTAS (VENTA_ID, CLIENTE_ID, NOMBRE_PRODUCTO, FECHA , CANTIDAD, PRECIO_TOTAL) VALUES
    -> (1, '2156', 'Laptop', '2024-05-01', 2, 1799.98),
    -> (2, '3486', 'Teléfono', '2024-05-02', 3, 1499.97),
    -> (3, '4586', 'Tablet', '2024-05-03', 1, 299.99),
    -> (4, '4846', 'Impresor', '2024-05-04', 4, 799.96),
    -> (5, '5568', 'Teclado', '2024-05-05', 2, 99.98),
    -> (6, '6651', 'Mouse', '2024-05-06', 5, 99.95),
    -> (7, '8467', 'Auricular', '2024-05-07', 3, 239.97),
    -> (8, '9768', 'Monitor', '2024-05-08', 1, 249.99),
    -> (9, '10668', 'Router', '2024-05-09', 2, 259.98),
    -> (10, '45638', 'Cámara', '2024-05-10', 1, 349.99);

mysql> SELECT * FROM VENTAS;

mysql> #TRIGGER REDUCIR STOCK
mysql> delimiter//
    -> CREATE TRIGGER actualizar_stock AFTER INSERT ON ventas
    -> FOR EACH ROW
    -> BEGIN
    ->     UPDATE productos
    ->     SET Stock = Stock - NEW.cantidad
    ->     WHERE nombre = NEW.nombre_producto;

mysql> SHOW TRIGGERS;
+--------------------+--------+--------+--------------------------------------------------------------------------------------------------------------+--------+------------------------+-----------------------------------------------------------------------------------------------------------------------+----------------+----------------------+----------------------+--------------------+
| Trigger            | Event  | Table  | Statement
                              | Timing | Created                | sql_mode
                                                                | Definer        | character_set_client | collation_connection | Database Collation |
+--------------------+--------+--------+--------------------------------------------------------------------------------------------------------------+--------+------------------------+-----------------------------------------------------------------------------------------------------------------------+----------------+----------------------+----------------------+--------------------+
| actualizar_stock   | INSERT | ventas | BEGIN
    UPDATE productos
    SET Stock = Stock - NEW.cantidad
    WHERE nombre = NEW.nombre_producto;
END | AFTER  | 2024-05-13 23:11:23.00 | ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION | root@localhost | utf8mb4              | utf8mb4_0900_ai_ci   | utf8mb4_0900_ai_ci |
| actualizar_compras | INSERT | ventas | begin
        update clientes
    set cantidadCompras = cantidadCompras + 1
    where id = NEW.CLIENTE_ID;
END     | AFTER  | 2024-05-14 00:35:12.60 | ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION | root@localhost | utf8mb4              | utf8mb4_0900_ai_ci   | utf8mb4_0900_ai_ci |
+--------------------+--------+--------+--------------------------------------------------------------------------------------------------------------+--------+------------------------+-----------------------------------------------------------------------------------------------------------------------+----------------+----------------------+----------------------+--------------------+



mysql> INSERT INTO CLIENTES  (NOMBRE, APELLIDO, ID, EMAIL, TELEFONO) VALUES
('MaríO', 'GarcíO', 5886, 'marciO@example.com', 5534567);

mysql> SELECT * FROM PRODUCTOS;

SELECT * FROM CLIENTES;

DELETE FROM CLIENTES WHERE ID = 5886;

UPDATE CLIENTES SET APELLIDO = 'Carvajal' WHERE APELLIDO = 'Lopez';

SELECT NOMBRE FROM CLIENTES WHERE NOMBRE = 'CARLOS';

SELECT * FROM CLIENTES;

select nombre from proveedores;

select * from ventas;

select * from ventas where fecha between 2024-05-07 and 2024-05-14;
Empty set, 2 warnings (0.00 sec)

select * from ventas where fecha between '2024-05-07' and curdate();

select * from ventas where fecha between date_sub(curdate(), interval 30 day) and curdate();

select sum(precio_total) as ingresos_totales from ventas;

select nombre as cliente_mas_frecuente from clientes where cantidadc
ompras = (select max(cantidadCompras)  from clientes);

select nombre as cliente_mas_frecuente, cantidadCompras as cantidad_compras from clientes where cantidadcompras = (select max(cantidadCompras)
 from clientes);

