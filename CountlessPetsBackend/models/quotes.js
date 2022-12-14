import { query } from "../db/index.js";
import price from "./price.js";
import validation from "./validate.js";

// GET all quotes

export async function getAllQuotes() {
  const data = await query(`SELECT * FROM quotes`);
  return data.rows;
}

// GET quote by ID
export async function getQuotebyId(id) {
  const data = await query(`SELECT * FROM quotes WHERE id = $1;`, [id]);
  return data.rows[0];
}

//[newQuote.pet_type, newQuote.pet_breed, newQuote.pet_age, newQuote.gender, newQuote.name,  newQuote.address, newQuote.city, newQuote.postcode, newQuote.number_of_pets ]

//PATCH quote by ID
export async function patchQuotebyId(newQuote, id) {
  const data = await query(
    `UPDATE quotes SET pet_type = $1, pet_breed = $2, pet_age = $3, gender = $4, name = $5,  address = $6, city = $7, postcode = $8, number_of_pets = $9 WHERE id = $10;`,
    [
      newQuote.pet_type,
      newQuote.pet_breed,
      newQuote.pet_age,
      newQuote.gender,
      newQuote.name,
      newQuote.address,
      newQuote.city,
      newQuote.postcode,
      newQuote.number_of_pets,
      id,
    ]
  );
}

// Get price for Quote POST a quote REPLACE WITH CORRECT DATA
export async function createQuote(newQuote) {
  console.log(newQuote);
  const data = await query(
    `INSERT INTO quotes (pet_type, pet_breed, pet_age, gender, name, address, city, postcode, number_of_pets) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`,
    [
      newQuote.pet_type,
      newQuote.pet_breed,
      newQuote.pet_age,
      newQuote.gender,
      newQuote.name,
      newQuote.address,
      newQuote.city,
      newQuote.postcode,
      newQuote.number_of_pets,
    ]
  );
  let validationResponse = await validation(newQuote);
  console.log("********", validationResponse[0], validationResponse[1]);
  if (validationResponse[0] === false || validationResponse[1] === false) {
    return `We couldn't validate your address and dog breed please try again.`;
  }

  let newQuotePrice = price(newQuote);
  let priceOfQuote =  newQuotePrice.toFixed(2);
  let monthlyPrice = newQuotePrice/12

  return `Your quote for insurance is  ??${priceOfQuote} and monthly price is ??${monthlyPrice} per month`;
}

// DELETE a quote by ID
export async function deleteQuoteById(id) {
  const data = await query(`DELETE FROM quotes WHERE id = $1 RETURNING *;`, [
    id,
  ]);
  return data.rows[0];
}
