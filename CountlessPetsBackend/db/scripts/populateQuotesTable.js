// still looking at logic of populating,  may need tweaking 

import { pool } from '../index.js';


// `CREATE TABLE IF NOT EXISTS quotes (
//     id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
//     pet_type TEXT,
//     pet_breed TEXT,
//     pet_age TEXT,
//     gender TEXT, 
//     name TEXT,
//     address TEXT,
//     city TEXT,
//     postcode TEXT,
//     number_of_pets INT

//     );`;
function populateQuotesTable(){
    
        const result = pool.query(
            `INSERT INTO quotes(
                pet_type, 
                pet_breed,
                pet_age,
                gender,
                name,
                address,
                city,
                postcode,
                number_of_pets

            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`,
            ['dog', 'Pug', '2', 'male','Tom', '12 T Road', 'London', 'LU7 0XJ',2 ]);
            console.log(result)
    }
    populateQuotesTable();
    
export default populateQuotesTable;