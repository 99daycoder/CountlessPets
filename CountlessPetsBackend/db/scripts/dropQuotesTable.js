import { query } from "../index.js";

async function dropQuotesTable() {
  const res = await query(`DROP TABLE IF EXISTS quotes;`);
  console.log(res);
}

dropQuotesTable();
export default dropQuotesTable;
