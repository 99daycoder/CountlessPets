import { query } from "../db/index.js";

// GET all quotes

export async function getAllQuotes() {
    const data = await query(`SELECT * FROM quotes`)
    return data;
}

// GET quote by ID
export async function getQuotebyId(id) {
    const data = await query(
      `SELECT * FROM quotes WHERE id = $1;`,
      [id]
    );
    return data.rows[0];
  }

// Get price for Quote POST a quote REPLACE WITH CORRECT DATA
export async function createQuote(newQuote) { 
    const data = await query(
      `INSERT INTO quotes (category, name, rating, photo, address, longitude, latitude, accessible, eye, hearing, brain, phone_number, web_address, opening_times) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;`,
      [newQuote.category, newQuote.name, newQuote.rating, newQuote.photo, newPlace.address, newPlace.longitude, newPlace.latitude, newPlace.accessible, newPlace.eye, newPlace.hearing, newPlace.brain, newPlace.phone_number, newPlace.web_address, newPlace.opening_times]
    );
    return data.rows[0];
  }

// DELETE a quote by ID
export async function deleteQuoteById(id) {
    const data = await query(
      `DELETE FROM quotes WHERE id = $1 RETURNING *;`, 
      [id]
    );
    return data.rows[0];
  }



