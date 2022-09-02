import express from "express";
import {
  getAllQuotes,
  getQuotebyId,
  createQuote,
  deleteQuoteById,
  patchQuotebyId,
} from "../models/quotes.js";
const router = express.Router();

/* GET quotes listing. */

router.get("/", async function (req, res, next) {
  console.log("This is getAllQuotes route...");
  const result = await getAllQuotes();

  res.json({
    success: true,
    payload: result,
  });
});

// GET quote by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await getQuotebyId(id);

  res.json({
    success: true,
    payload: result,
  });
});

//PATCH a quote by ID
router.patch("/:id", async (req, res) => {
  // try {
  //   await Rocket.findByIdAndUpdate(ctx.params.id, ctx.request.body, {
  //     runValidators: true,
  //   });
  //   ctx.status = 200;
  // } catch (error) {
  //   ctx.throw(400, error.message);
  // }
  const newQuote = req.body;
  const id = req.params.id;
  const result = await patchQuotebyId(newQuote, id);

  res.json({
    success: true,
    payload: result,
  });
});

// POST a quote AND get the PRICE!
router.post("/", async (req, res) => {
  const newQuote = req.body;
  const result = await createQuote(newQuote);

  res.json({
    success: true,
    payload: result,
  });
});

// DELETE a place by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await deleteQuoteById(id);

  res.json({
    success: true,
    payload: result,
  });
});

export default router;
