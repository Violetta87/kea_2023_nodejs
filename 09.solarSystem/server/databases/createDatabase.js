import db from "./connection.js"

//argv= arguments - 
//determinere hvis det er deletemode - 
//vi kan have to script ; det ene sletter, og det andet opdatere
console.log(process.argv.findIndex((argument)=> argument === "delete_mode") === -1? false : true)


//if we want to delete the old data in the tables - 
const isDeletedMode = true;

if(isDeletedMode) {
    db.exec(`DROP TABLE IF EXISTS planets`);
    db.exec(`DROP TABLE IF EXISTS people`);
}

//DDL

db.exec(`CREATE TABLE IF NOT EXISTS planets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    size FLOAT,
    is_habitable BOOLEAN NOT NULL
)`);

db.exec(`CREATE TABLE IF NOT EXISTS people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    planet_id INTEGER,
    FOREIGN KEY(planet_id) 
        REFERENCES planets(id)
);
`);

//seeding (adds data) (DML)

db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('mercury', false);`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('saturn', true);`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('moon', false);`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('pluto', true);`);

//seeding data with people

db.exec(`INSERT INTO people (name) VALUES ('cam')`);



