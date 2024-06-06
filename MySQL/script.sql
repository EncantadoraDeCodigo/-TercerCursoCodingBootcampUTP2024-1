CREATE TABLE Ventas (
    ID_Venta INT AUTO_INCREMENT PRIMARY KEY,
    ID_Producto INT,
    ID_Cliente INT,
    Fecha_Venta DATE,
    Cantidad INT,
    Precio_Unitario DECIMAL(10, 2),
    Total DECIMAL(10, 2),
    FOREIGN KEY (ID_Producto) REFERENCES Productos(ID_Producto),
    FOREIGN KEY (ID_Cliente) REFERENCES Clientes(ID_Cliente)
);

#Tabla de Proveedores
create table Proveedores (
ID_Proveedor INT AUTO_INCREMENT PRIMARY KEY, 
Nombre varchar(10),
Direccion varchar(10),
Telefono varchar(10)
);



#Tabla de Productos
create table Productos (
    Nombre varchar(15),
    Precio decimal(10, 2),
    Stock int,
    Proveedor int,
    ID_Producto int auto_increment primary key, 
    Categoria varchar(15),
    foreign key(Proveedor) references Proveedores(ID_Proveedor)
);

#Tabla de Clientes
CREATE TABLE Clientes (
    Nombre varchar(15),
    Apellido varchar(15),
    ID_Cliente int(10) not null,
    FECHA_NACIMIENTO date,
    primary key (ID_Cliente)
);


use TiendaOnline;

insert into Proveedores 
(Nombre, Direccion, Telefono) 
value
('Roses', 'C', '123456790'),
('Elegants', 'Ave 456', '9876543210'),
('Textiles', 'Plaza 789', '5555555555'),
('Calzados', 'Aven 321', '1112223333'),
('Moda', 'Cll 654', '9998887777'),
('Brillants', 'Aven 789', '7777777777'),
('Cueros', 'Cll 456', '8888888888'),
('Librería', 'Plaza 123', '6666666666'),
('Electronic', 'Aven 789', '5555555555'),
('Muebles', 'Cll 456','4444444444');

#Productos----------------------------------------------------------------------------------------------------------------------
insert into Productos 
(Proveedor, Nombre, Precio, Stock, Categoria) 
value
('272', 'Camisa', 29.99, 50, 'Ropa'),
('273', 'Gafas', 19.99, 30, 'Accesorios'),
('274', 'Bufanda', 14.99, 40,'Ropa'),
('275', 'Pantalones', 34.99, 4, 'Ropa'),
('276', 'Bolso', 49.99, 10, 'Accesorios'),
('277', 'Anillo', 99.99, 15, 'Joyería'),
('278', 'Mochila', 39.99, 20, 'Bolsos'),
('279', 'Libro "soledad"', 12.99, 50, 'Libros'),
('280', 'Smartphone', 499.99, 5, 'Electrónicos'),
('281', 'Sofá', 799.99, 3, 'Muebles');

insert into Clientes
(Nombre, Apellido, ID_Cliente, FECHA_NACIMIENTO)
value
('Victoria', 'Duque', 10, '1992-01-15'),
('Juan', 'Peréz', 12, '1985-05-23'),
('Luisa', 'Sánchez', 13, '1990-08-10'),
('Shakira', 'Parker', 14, '1988-03-18'),
('CR7', 'Ramírez', 15, '1986-09-03'),
('Diomez', 'Días', 16, '1995-12-17'),
('Jordi', 'Morty', 17, '1987-06-25'),
('Mickey', 'Mouse', 18, '1984-11-05'),
('Batman', 'Hernandez', 19, '1991-07-14'),
('Superman', 'García', 20, '1993-04-20');

#Insertar datos de Ventas:
insert into Ventas
(ID_Producto, ID_Cliente, Fecha_Venta, Cantidad, Precio_Unitario, Total)
value
('47', '11', '2024-05-01', 2, 29.99, 59.98),
('48', '12', '2024-05-02', 1, 19.99, 19.99),
('49', '13', '2024-05-03', 3, 14.99, 44.97),
('50', '14', '2024-05-04', 1, 34.99, 34.99),
('51', '15', '2024-05-05', 2, 49.99, 99.98),
('52', '16', '2024-05-06', 1, 99.99, 99.99),
('53', '17', '2024-05-07', 1, 39.99, 39.99),
('54', '18', '2024-05-08', 4, 12.99, 51.96),
('55', '19', '2024-05-09', 1, 499.99, 499.99),
('56', '20', '2024-05-10', 2, 799.99, 1599.98);

#Tabla que inserta registros en la tabla de ventas
#Simulación de registro de ventas------------------------------------------------
insert into Ventas 
(ID_Producto, ID_Cliente, Fecha_Venta, Cantidad, Precio_Unitario, Total)
value
    ('52', '16', '2024-05-06', 2, 29.99, 59.98),
    ('53', '17', '2024-05-07', 1, 19.99, 19.99),
    ('55', '19', '2024-05-09', 3, 14.99, 44.97),
    ('55', '20', '2024-05-14', 1, 19.99, 19.99);
    

    
    /*select Nombre, Apellido, ID_Cliente from clientes;  */  
    select *from ventas;
    
    
#Gestión de inventaerio ♥-----------------------------------------------------------
 /*----- ACTUALIZAR LA CANTIDAD DISPONIBLE DESPÚES DE UNA VENTA -----------*/
update productos
set Stock= Stock - (select Cantidad from Ventas where ID_Producto= 51)
where ID_Producto= 51;

/*------------ VER EL ESTADO DE EL INVENTARIO---------------------------------*/
select ID_Producto, Nombre, Stock
from productos;

/*--------- VER EL STOCK DE UN PRODUCTO EN ESPECIFICO -------------------------*/
select Stock
from Productos
where ID_Producto= 51;

#GESTIÓN DE CLIENTES Y PROVEEDORES:
/*-- Crear, agregar, actualizar, y eliminar registros de clientes y proveedores---*/
# Agregar:
insert into Clientes 
(Nombre, Apellido, ID_Cliente, FECHA_Nacimiento)
value 
('Lola', 'Mento', '22', '20-05-26');

/*------------ ELIMINAR REGISTROS ------------------------*/
DELETE FROM Clientes
WHERE Nombre = "Luisa";

select *from Clientes 
where Nombre = 'Victoria';

select *from proveedores 
where Nombre = 'Moda';

select *from Clientes 
where Direccion = 'Victoria';

select *from proveedores
where Direccion like '%Cll 654%';


#GENERACIÓN DE DATPS:

/------------ GENERACIÓN DE  REGISTROS ------------------------
////////////////// Ventas Totales //////////////////////////////////////
select sum(Total) as TotalVentasUltimoDia
from ventas 
where Fecha_Venta= curdate();

////////////////Ventas del ultmo mes////////////////////////////

select sum(Total) TotalVentasUltimoMes
from Ventas
where month(Fecha_Venta) = month(curdate());

select sum(Total) as IngresosTotales
from Ventas;


select c.Nombre, c.Apellido, count(*) as TotalCompras
from Clientes c
join Ventas v on c.ID_Cliente = v.ID_Cliente
group by c.ID_Cliente
order by TotalCompras desc
limit 4;

#Consultas----------------------------------------------------------------------
Select ID_Producto, ID_Cliente, Fecha_Venta, Cantidad, Precio_Unitario, Total from Ventas;
#Para consultar todos los datos de la tabla:
select *from ventas;

#Consultas usando operador logico: WHERE
select *from Ventas where ID_Cliente= '11'

/*Las consultas SQL son instrucciones que se utilizan para interactuar con una base de datos */