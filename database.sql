CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (26) NOT NULL,
	"age"  INTEGER NOT NULL,
	"favoriteColor" VARCHAR (50) NOT NULL,
  	"readyToTransfer" BOOLEAN DEFAULT FALSE,
  	"notes" VARCHAR (150)
);

INSERT INTO "koalas" 
	("name", "age", "favoriteColor", "readyToTransfer", "notes") 
	VALUES 
	('Scotty', 4, 'Red', False, 'Born in Guatemala'),
	('Jean', 5, 'Green', TRUE, 'Allergic to lots of lava'),
 	('Ororo', 7, 'Yellow', FALSE, 'Loves listening to Paula (Abdul)'),
 	('K''Leaf', 15, 'Purple', FALSE, 'Never refueses a treat.'),
 	('Charlie', 9, 'Orange', TRUE, 'Favorite band is Nirvana'),
 	('Betsy', 4, 'Blue', TRUE, 'Has a pet iguana');
	
SELECT * FROM "koalas";
