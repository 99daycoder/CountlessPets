// basic strcuture for creating a table, may need tweaking

import { pool } from "../index.js";
//Id, petType, petBreed, petAge, Gender,  Name, Address, City, PostCode, numberOfPets,
const sqlString = `CREATE TABLE IF NOT EXISTS quotes (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    pet_type TEXT,
    pet_breed TEXT,
    pet_age TEXT,
    gender TEXT, 
    name TEXT,
    address TEXT,
    city TEXT,
    postcode TEXT,
    number_of_pets INT
    );`;

async function createQuotesTable() {
  const res = await pool.query(sqlString);
  console.log(res);
  console.log("Quotes_test1 created");
}

createQuotesTable();

console.log("script works");

export default createQuotesTable;
