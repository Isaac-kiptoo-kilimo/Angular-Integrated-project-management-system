
CREATE TABLE Users(
    user_id VARCHAR(100) NOT NULL PRIMARY KEY,
    fullName VARCHAR(200) NOT NULL,
    email VARCHAR(300) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    role VARCHAR(20) Default 'user',
    isAssigned INT DEFAULT 0
)

SELECT * FROM Users


DROP TABLE Users

SELECT * FROM Users WHERE email ='isaackilimok2@gmail.com'
DELETE FROM Users WHERE email='isaackilimok2@gmail.com'; 

UPDATE Users SET role = 'admin' WHERE email = 'isaackilimok2@gmail.com'