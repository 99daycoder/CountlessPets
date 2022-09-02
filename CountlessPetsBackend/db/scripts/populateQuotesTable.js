// still looking at logic of populating,  may need tweaking 

import { pool } from '../index.js';
import { places } from '../../libs/data.js';

function populateQuotesTable(){
    
        const result = pool.query(
            `INSERT INTO quotes_test1(
                pet_type, 
                name,
                address,
                city
            ) VALUES ($1, $2, $3, $4) RETURNING *;`,
            ['dog', 'Martin Marlin', '39 Jarli road, 2nd Floor', 'London']);
            console.log(result)
    }
    populateQuotesTable();
    
export default populateQuotesTable;