-- DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE IF NOT EXISTS company
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(80),
  position VARCHAR(80)
);

INSERT INTO company (id, name, position) VALUES (1, 'Misty Copeland', 'Principal');
INSERT INTO company (id, name, position) VALUES (2, 'Isabella Boylston', 'Principal');
INSERT INTO company (id, name, position) VALUES (3, 'Channing Tatum', 'Principal');
INSERT INTO company (id, name, position) VALUES (4, 'Stephen Boss', 'Principal');
INSERT INTO company (id, name, position) VALUES (5, 'Julianne Hough', 'Soloist');
INSERT INTO company (id, name, position) VALUES (6, 'Derek Hough', 'Soloist');
INSERT INTO company (id, name, position) VALUES (7, 'Jenna Dewan-Tatum', 'Soloist');
INSERT INTO company (id, name, position) VALUES (8, 'Lauren Froderman', 'Soloist');
INSERT INTO company (id, name, position) VALUES (9, 'Ryoichi Hirano', 'Soloist');
INSERT INTO company (id, name, position) VALUES (10, 'Christopher Hemsworth', 'Corps de Ballet');
INSERT INTO company (id, name, position) VALUES (11, 'Christopher Evans', 'Corps de Ballet');
INSERT INTO company (id, name, position) VALUES (12, 'Robert Downey, Jr.', 'Corps de Ballet');
INSERT INTO company (id, name, position) VALUES (13, 'Zoe Saldana', 'Corps de Ballet');
INSERT INTO company (id, name, position) VALUES (14, 'Emma Kate Salvatore', 'Corps de Ballet');
INSERT INTO company (id, name, position) VALUES (15, 'Felicia Rhoden', 'Corps de Ballet');
INSERT INTO company (id, name, position) VALUES (16, 'Jordan Henricus', 'Corps de Ballet');
INSERT INTO company (id, name, position) VALUES (17, 'Brittney Atticus', 'Corps de Ballet');

CREATE TABLE IF NOT EXISTS performances
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(80),
  season VARCHAR(80),
  run_dates VARCHAR(80),
);

INSERT INTO performances (id, name, season, run_dates) VALUES (1, 'Cóppelia', 'fall', 'September 21-October 28');
INSERT INTO performances (id, name, season, run_dates) VALUES (2, 'Giselle', 'fall', 'October 31-November 28');
INSERT INTO performances (id, name, season, run_dates) VALUES (3, 'Sylvia', 'winter', 'November 21-December 9');
INSERT INTO performances (id, name, season, run_dates) VALUES (4, 'The Nutcracker', 'winter', 'December 1-January 7');
INSERT INTO performances (id, name, season, run_dates) VALUES (5, 'Don Quijote', 'winter', 'January 9-February 6');
INSERT INTO performances (id, name, season, run_dates) VALUES (6, 'Sleeping Beauty', 'winter', 'February 8-March 3');

ALTER TABLE performances ADD COLUMN on_sale INTEGER;

UPDATE performances SET on_sale = 1 WHERE name = 'Cóppelia';
UPDATE performances SET on_sale = 0 WHERE name = 'Giselle';
UPDATE performances SET on_sale = 0 WHERE name = 'Sylvia';
UPDATE performances SET on_sale = 0 WHERE name = 'The Nutcracker';
UPDATE performances SET on_sale = 0 WHERE name = 'Don Quijote';
UPDATE performances SET on_sale = 0 WHERE name = 'Sleeping Beauty';


CREATE TABLE IF NOT EXISTS shows
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(80),
  season VARCHAR(80),
  show_date VARCHAR(80),
  show_time VARCHAR(80),
  principals VARCHAR(80),
  show_id INTEGER,
  FOREIGN KEY(show_id) REFERENCES performances(id)
);

--Coppelia
INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (2, 'Cóppelia', 'fall', 'Friday, September 22', '7:00 pm', 'Jenna Dewan-Tatum, Channing Tatum', 1);
INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (4, 'Cóppelia', 'fall', 'Saturday, September 23', '7:00 pm', 'Misty Copeland, Channing Tatum', 1);
INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (6, 'Cóppelia', 'fall', 'Friday, September 29', '7:00 pm', 'Julianne Hough, Channing Tatum', 1);
INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (8, 'Cóppelia', 'fall', 'Saturday, September 30', '7:00 pm', 'Misty Copeland, Channing Tatum', 1);
INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (12, 'Cóppelia', 'fall', 'Friday, October 6', '7:00 pm', 'Misty Copeland, Channing Tatum', 1);
INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (14, 'Cóppelia', 'fall', 'Saturday, October 7', '7:00 pm', 'Julianne Hough, Ryoichi Hirano', 1);
INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (18, 'Cóppelia', 'fall', 'Friday, October 13', '7:00 pm', 'Misty Copeland, Channing Tatum', 1);
INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (20, 'Cóppelia', 'fall', 'Saturday, October 14', '7:00 pm', 'Misty Copeland, Channing Tatum', 1);
INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (24, 'Cóppelia', 'fall', 'Friday, October 20', '7:00 pm', 'Misty Copeland, Channing Tatum', 1);
INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (26, 'Cóppelia', 'fall', 'Saturday, October 21', '7:00 pm', 'Misty Copeland, Channing Tatum', 1);
INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (30, 'Cóppelia', 'fall', 'Friday, October 27', '7:00 pm', 'Julianne Hough, Ryoichi Hirano', 1);

--Giselle
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (34, 'Giselle', 'fall', 'Saturday, November 4', '7:00 pm', 'Misty Copeland, Derek Hough', 2);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (39, 'Giselle', 'fall', 'Saturday, November 11', '7:00 pm', 'Misty Copeland, Derek Hough', 2);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (44, 'Giselle', 'fall', 'Saturday, November 18', '7:00 pm', 'Misty Copeland, Derek Hough', 2);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (49, 'Giselle', 'fall', 'Saturday, November 25', '7:00 pm', 'Misty Copeland, Derek Hough', 2);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (50, 'Giselle', 'fall', 'Sunday, November 26', '2:00 pm', 'Isabella Boylston, Stephen Boss', 2);


CREATE TABLE IF NOT EXISTS tickets
(
  id SERIAL PRIMARY KEY, --in chinnok use 
  --id INTEGER PRIMARY KEY AUTOINCREMENT,
  section VARCHAR(80),
  seat_row VARCHAR(80),
  num INTEGER,
  available INTEGER,
  price INTEGER,
  specific_performance_id INTEGER,
  FOREIGN KEY(specific_performance_id) REFERENCES shows(id)
);

--SPECIFIC_PERFORMANCE_IDs to USE!! Only Coppelia is on sale
-- 2,
-- 4,
-- 6,
-- 8,
-- 12,
-- 14,
-- 18,
-- 20
-- 24,
-- 26,
-- 30

--Coppelia
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (1, 'Cóppelia', 'fall', 'Thursday, September 21', '7:00 pm', 'Misty Copeland, Channing Tatum', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (3, 'Cóppelia', 'fall', 'Saturday, September 23', '2:00 pm', 'Isabella Boylston, Stephen Boss', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (300, 'Cóppelia', 'fall', 'Sunday, September 24', '2:00 pm', 'Isabella Boylston, Stephen Boss', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (400, 'Cóppelia', 'fall', 'Sunday, September 24', '7:00 pm', 'Misty Copeland, Channing Tatum', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (5, 'Cóppelia', 'fall', 'September 28', '7:00 pm', 'Misty Copeland, Channing Tatum', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (7, 'Cóppelia', 'fall', 'Saturday, September 30', '2:00 pm', 'Isabella Boylston, Stephen Boss', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (9, 'Cóppelia', 'fall', 'Sunday, October 1', '2:00 pm', 'Isabella Boylston, Ryoichi Hirano', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (10, 'Cóppelia', 'fall', 'Sunday, October 1', '7:00 pm', 'Misty Copeland, Channing Tatum', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (11, 'Cóppelia', 'fall', 'Thursday, October 5', '7:00 pm', 'Jenna Dewan-Tatum, Channing Tatum', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (13, 'Cóppelia', 'fall', 'Saturday, October 7', '2:00 pm', 'Lauren Froderman, Stephen Boss', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (15, 'Cóppelia', 'fall', 'Sunday, October 8', '2:00 pm', 'Isabella Boylston, Stephen Boss', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (16, 'Cóppelia', 'fall', 'Sunday, October 8', '7:00 pm', 'Misty Copeland, Ryoichi Hirano', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (17, 'Cóppelia', 'fall', 'Thursday, October 12', '2:00 pm', 'Isabella Boylston, Stephen Boss', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (19, 'Cóppelia', 'fall', 'Saturday, October 14', '2:00 pm', 'Isabella Boylston, Stephen Boss', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (21, 'Cóppelia', 'fall', 'Sunday, October 15', '7:00 pm', 'Misty Copeland, Channing Tatum', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (22, 'Cóppelia', 'fall', 'Sunday, October 15', '7:00 pm', 'Julianne Hough, Channing Tatum', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (23, 'Cóppelia', 'fall', 'Thursday, October 19', '2:00 pm', 'Isabella Boylston, Stephen Boss', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (25, 'Cóppelia', 'fall', 'Saturday, October 21', '2:00 pm', 'Isabella Boylston, Ryoichi Hirano', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (27, 'Cóppelia', 'fall', 'Sunday, October 22', '7:00 pm', 'Jenna Dewan-Tatum, Channing Tatum', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (28, 'Cóppelia', 'fall', 'Sunday, October 22', '7:00 pm', 'Misty Copeland, Channing Tatum', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (29, 'Cóppelia', 'fall', 'Thursday, October 26', '2:00 pm', 'Lauren Froderman, Stephen Boss', 1);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (31, 'Cóppelia', 'fall', 'Saturday, October 28', '2:00 pm', 'Misty Copeland, Channing Tatum', 1);

--Giselle
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (32, 'Giselle', 'fall', 'Tuesday, October 31', '7:00 pm', 'Jenna Dewan-Tatum, Channing Tatum', 14);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (33, 'Giselle', 'fall', 'Saturday, November 4', '2:00 pm', 'Julianne Hough, Ryoichi Hirano', 14);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (35, 'Giselle', 'fall', 'Sunday, November 5', '2:00 pm', 'Isabella Boylston, Stephen Boss', 14);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (36, 'Giselle', 'fall', 'Sunday, November 5', '7:00 pm', 'Misty Copeland, Channing Tatum', 14);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (37, 'Giselle', 'fall', 'Tuesday, November 7', '7:00 pm', 'Jenna Dewan-Tatum, Channing Tatum', 14);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (38, 'Giselle', 'fall', 'Saturday, November 11', '2:00 pm', 'Julianne Hough, Ryoichi Hirano', 14);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (40, 'Giselle', 'fall', 'Sunday, November 12', '2:00 pm', 'Isabella Boylston, Stephen Boss', 14);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (41, 'Giselle', 'fall', 'Sunday, November 12', '7:00 pm', 'Misty Copeland, Channing Tatum', 14);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (42, 'Giselle', 'fall', 'Tuesday, November 14', '7:00 pm', 'Jenna Dewan-Tatum, Channing Tatum', 14);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (43, 'Giselle', 'fall', 'Saturday, November 18', '2:00 pm', 'Julianne Hough, Ryoichi Hirano', 14);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (45, 'Giselle', 'fall', 'Sunday, November 19', '2:00 pm', 'Isabella Boylston, Stephen Boss', 2);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (46, 'Giselle', 'fall', 'Sunday, November 19', '7:00 pm', 'Misty Copeland, Channing Tatum', 2);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (47, 'Giselle', 'fall', 'Tuesday, November 21', '7:00 pm', 'Jenna Dewan-Tatum, Channing Tatum', 2);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (48, 'Giselle', 'fall', 'Saturday, November 25', '2:00 pm', 'Julianne Hough, Ryoichi Hirano', 2);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (51, 'Giselle', 'fall', 'Sunday, November 26', '7:00 pm', 'Misty Copeland, Channing Tatum', 2);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (52, 'Giselle', 'fall', 'Tuesday, November 28', '7:00 pm', 'Jenna Dewan-Tatum, Channing Tatum', 2);

-- --Sylvia
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (53, 'Sylvia', 'winter', 'Tuesday, November 21', '2:00 pm', 'Julianne Hough, Stephen Boss', 3);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (54, 'Sylvia', 'winter', 'Friday, November 24', '2:00 pm', 'Julianne Hough, Ryoichi Hirano', 3);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (55, 'Sylvia', 'winter', 'Friday, November 24', '7:00 pm', 'Jenna Dewan-Tatum, Stephen Boss', 3);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (56, 'Sylvia', 'winter', 'Thursday, November 30', '2:00 pm', 'Julianne Hough, Stephen Boss', 3);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (57, 'Sylvia', 'winter', 'Saturday, December 2', '2:00 pm', 'Julianne Hough, Ryoichi Hirano', 3);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (58, 'Sylvia', 'winter', 'Saturday, December 2', '7:00 pm', 'Jenna Dewan-Tatum, Stephen Boss', 3);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (59, 'Sylvia', 'winter', 'Thursday, December 7', '2:00 pm', 'Julianne Hough, Stephen Boss', 3);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (60, 'Sylvia', 'winter', 'Friday, December 8', '2:00 pm', 'Julianne Hough, Ryoichi Hirano', 3);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (61, 'Sylvia', 'winter', 'Saturday, December 9', '2:00 pm', 'Jenna Dewan-Tatum, Stephen Boss', 3);

-- --Nutcracker
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (62, 'The Nutcracker', 'winter', 'Friday, December 1', '7:00 pm', 'Misty Copeland, Ryoichi Hirano', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (63, 'The Nutcracker', 'winter', 'Sunday, December 3', '7:00 pm', 'Misty Copeland, Ryoichi Hirano', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (64, 'The Nutcracker', 'winter', 'Friday, December 8', '7:00 pm', 'Jenna Dewan-Tatum, Derek Hough', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (65, 'The Nutcracker', 'winter', 'Saturday, December 9', '2:00 pm', 'Jenna Dewan-Tatum, Derek Hough', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (66, 'The Nutcracker', 'winter', 'Saturday, December 9', '7:00 pm', 'Misty Copeland, Ryoichi Hirano', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (67, 'The Nutcracker', 'winter', 'Sunday, December 10', '2:00 pm', 'Julianne Hough, Stephen Boss', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (68, 'The Nutcracker', 'winter', 'Sunday, December 10', '7:00 pm', 'Isabella Boylston, Channing Tatum', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (69, 'The Nutcracker', 'winter', 'Friday, December 15', '7:00 pm', 'Jenna Dewan-Tatum, Derek Hough', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (70, 'The Nutcracker', 'winter', 'Saturday, December 16', '2:00 pm', 'Jenna Dewan-Tatum, Derek Hough', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (71, 'The Nutcracker', 'winter', 'Saturday, December 16', '7:00 pm', 'Misty Copeland, Ryoichi Hirano', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (72, 'The Nutcracker', 'winter', 'Sunday, December 17', '2:00 pm', 'Julianne Hough, Stephen Boss', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (73, 'The Nutcracker', 'winter', 'Sunday, December 17', '7:00 pm', 'Isabella Boylston, Channing Tatum', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (74, 'The Nutcracker', 'winter', 'Friday, December 22', '7:00 pm', 'Jenna Dewan-Tatum, Derek Hough', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (75, 'The Nutcracker', 'winter', 'Saturday, December 23', '2:00 pm', 'Jenna Dewan-Tatum, Derek Hough', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (76, 'The Nutcracker', 'winter', 'Saturday, December 23', '7:00 pm', 'Misty Copeland, Ryoichi Hirano', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (77, 'The Nutcracker', 'winter', 'Sunday, December 24', '2:00 pm', 'Julianne Hough, Stephen Boss', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (78, 'The Nutcracker', 'winter', 'Sunday, December 24', '7:00 pm', 'Isabella Boylston, Channing Tatum', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (79, 'The Nutcracker', 'winter', 'Monday, December 25', '2:00 pm', 'Misty Copeland, Ryoichi Hirano', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (80, 'The Nutcracker', 'winter', 'Friday, December 29', '7:00 pm', 'Jenna Dewan-Tatum, Derek Hough', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (81, 'The Nutcracker', 'winter', 'Saturday, December 30', '2:00 pm', 'Jenna Dewan-Tatum, Derek Hough', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (82, 'The Nutcracker', 'winter', 'Saturday, December 30', '7:00 pm', 'Misty Copeland, Ryoichi Hirano', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (83, 'The Nutcracker', 'winter', 'Sunday, December 31', '2:00 pm', 'Julianne Hough, Stephen Boss', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (84, 'The Nutcracker', 'winter', 'Sunday, December 31', '7:00 pm', 'Isabella Boylston, Channing Tatum', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (85, 'The Nutcracker', 'winter', 'Friday, January 5', '7:00 pm', 'Jenna Dewan-Tatum, Derek Hough', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (86, 'The Nutcracker', 'winter', 'Saturday, January 6', '2:00 pm', 'Jenna Dewan-Tatum, Derek Hough', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (87, 'The Nutcracker', 'winter', 'Saturday, January 6', '7:00 pm', 'Misty Copeland, Ryoichi Hirano', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (88, 'The Nutcracker', 'winter', 'Sunday, January 7', '2:00 pm', 'Julianne Hough, Stephen Boss', 4);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (89, 'The Nutcracker', 'winter', 'Sunday, January 7', '7:00 pm', 'Isabella Boylston, Channing Tatum', 4);

-- --Don Quijote
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (90, 'Don Quijote', 'winter', 'Tuesday, January 9', '7:00 pm', 'Jenna Dewan-Tatum, Channing Tatum', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (91, 'Don Quijote', 'winter', 'Friday, January 12', '7:00 pm', 'Misty Copeland, Stephen Boss', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (92, 'Don Quijote', 'winter', 'Saturday, January 13', '7:00 pm', 'Julianne Hough, Ryoichi Hirano', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (93, 'Don Quijote', 'winter', 'Sunday, January 14', '7:00 pm', 'Isabella Boylston, Derek Hough', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (94, 'Don Quijote', 'winter', 'Tuesday, January 16', '7:00 pm', 'Jenna Dewan-Tatum, Channing Tatum', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (95, 'Don Quijote', 'winter', 'Friday, January 19', '7:00 pm', 'Misty Copeland, Stephen Boss', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (96, 'Don Quijote', 'winter', 'Saturday, January 20', '7:00 pm', 'Julianne Hough, Ryoichi Hirano', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (97, 'Don Quijote', 'winter', 'Sunday, January 21', '7:00 pm', 'Isabella Boylston, Derek Hough', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (98, 'Don Quijote', 'winter', 'Tuesday, January 23', '7:00 pm', 'Jenna Dewan-Tatum, Channing Tatum', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (99, 'Don Quijote', 'winter', 'Friday, January 26', '7:00 pm', 'Misty Copeland, Stephen Boss', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (100, 'Don Quijote', 'winter', 'Saturday, January 27', '7:00 pm', 'Julianne Hough, Ryoichi Hirano', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (101, 'Don Quijote', 'winter', 'Sunday, January 28', '7:00 pm', 'Isabella Boylston, Derek Hough', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (102, 'Don Quijote', 'winter', 'Tuesday, January 30', '7:00 pm', 'Jenna Dewan-Tatum, Channing Tatum', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (103, 'Don Quijote', 'winter', 'Friday, February 1', '7:00 pm', 'Misty Copeland, Stephen Boss', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (104, 'Don Quijote', 'winter', 'Saturday, February 2', '7:00 pm', 'Julianne Hough, Ryoichi Hirano', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (105, 'Don Quijote', 'winter', 'Sunday, February 3', '7:00 pm', 'Isabella Boylston, Derek Hough', 5);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (106, 'Don Quijote', 'winter', 'Tuesday, February 6', '7:00 pm', 'Jenna Dewan-Tatum, Channing Tatum', 5);

-- --Sleeping Beauty
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (107, 'The Sleeping Beauty', 'winter', 'Thursday, February 8', '7:00 pm', 'Jenna Dewan-Tatum, Derek Hough', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (108, 'The Sleeping Beauty', 'winter', 'Friday, February 9', '7:00 pm', 'Misty Copeland, Channing Tatum', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (109, 'The Sleeping Beauty', 'winter', 'Saturday, February 10', '2:00 pm', 'Julianne Hough, Ryoichi Hirano', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (110, 'The Sleeping Beauty', 'winter', 'Saturday, February 10', '7:00 pm', 'Isabella Boylston, Stephen Boss', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (111, 'The Sleeping Beauty', 'winter', 'Sunday, February 11', '7:00 pm', 'Misty Copeland, Channing Tatum', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (112, 'The Sleeping Beauty', 'winter', 'Wednesday, February 14', '7:00 pm', 'Jenna Dewan-Tatum, Channing Tatum', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (113, 'The Sleeping Beauty', 'winter', 'Thursday, February 15', '7:00 pm', 'Jenna Dewan-Tatum, Derek Hough', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (114, 'The Sleeping Beauty', 'winter', 'Friday, February 16', '7:00 pm', 'Misty Copeland, Channing Tatum', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (115, 'The Sleeping Beauty', 'winter', 'Saturday, February 17', '2:00 pm', 'Julianne Hough, Ryoichi Hirano', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (116, 'The Sleeping Beauty', 'winter', 'Saturday, February 17', '7:00 pm', 'Isabella Boylston, Stephen Boss', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (117, 'The Sleeping Beauty', 'winter', 'Sunday, February 18', '7:00 pm', 'Misty Copeland, Channing Tatum', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (118, 'The Sleeping Beauty', 'winter', 'Thursday, February 23', '7:00 pm', 'Jenna Dewan-Tatum, Derek Hough', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (119, 'The Sleeping Beauty', 'winter', 'Friday, February 24', '7:00 pm', 'Misty Copeland, Channing Tatum', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (120, 'The Sleeping Beauty', 'winter', 'Saturday, February 25', '2:00 pm', 'Julianne Hough, Ryoichi Hirano', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (121, 'The Sleeping Beauty', 'winter', 'Saturday, February 25', '7:00 pm', 'Isabella Boylston, Stephen Boss', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (122, 'The Sleeping Beauty', 'winter', 'Sunday, February 26', '7:00 pm', 'Misty Copeland, Channing Tatum', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (123, 'The Sleeping Beauty', 'winter', 'Thursday, March 2', '7:00 pm', 'Jenna Dewan-Tatum, Derek Hough', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (124, 'The Sleeping Beauty', 'winter', 'Friday, March 3', '7:00 pm', 'Misty Copeland, Channing Tatum', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (125, 'The Sleeping Beauty', 'winter', 'Saturday, March 4', '2:00 pm', 'Julianne Hough, Ryoichi Hirano', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (126, 'The Sleeping Beauty', 'winter', 'Saturday, March 4', '7:00 pm', 'Isabella Boylston, Stephen Boss', 6);
-- INSERT INTO shows (id, name, season, show_date, show_time, principals, show_id) VALUES (127, 'The Sleeping Beauty', 'winter', 'Sunday, March 5', '7:00 pm', 'Misty Copeland, Channing Tatum', 6);