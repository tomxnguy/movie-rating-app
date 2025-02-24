import "dotenv/config";
import pg from "pg";
import express from "express";
import { ClientError, errorMiddleware } from "./lib/index.js";

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get("/api/test", async (req, res) => {
  res.send("Hello, world!");
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});

//This endpoint is to get all movies
app.get("/api/movies", async (req, res, next) => {
  try {
    const sql = `
    select *
    from "movies"
    `;
    const result = await db.query(sql);
    const movies = result.rows;
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
  }
});
