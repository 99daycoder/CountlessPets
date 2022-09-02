// basic strcuture for creating a table, may need tweaking

import { pool } from '../index.js';

const sqlString = `CREATE TABLE IF NOT EXISTS quotes_test1 (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    pet_type TEXT,
    name TEXT,
    photo TEXT,
    address TEXT, 
    city TEXT
    );`;

async function createQuotesTable(){
    const res = await pool.query(sqlString)
    console.log(res)
    console.log('Quotes_test1 created')
};

createQuotesTable();

console.log("script works")

export default createQuotesTable; 