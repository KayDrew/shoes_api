CREATE TABLE shoes(id SERIAL,color VARCHAR(255) NOT NULL,brand VARCHAR(255) NOT NULL, price INT NOT NULL, size INT NOT NULL, in_stock INT NOT NULL,image VARCHAR(255) NOT NULL);
CREATE TABLE cart(cart_code  SERIAL,status VARCHAR(8), username UNIQUE)
CREATE TABLE cart_items(cart_code INT ,id INT ,qty INT NOT NULL,FOREIGN KEY(id) REFERENCES shoes(id))

