import express from "express";
import { sessionExpress } from "../middleware";

export const router = express.Router();

router
  .use(sessionExpress)
  .post("/signup", async (req, res) => {
    res.json("hello");
  })
  .get("/login", async (req, res) => {
    req.session.enginnerId = 1;
    res.send("セッション");
  })
  .get("/", async (req, res) => {
    req.session.enginnerId = 1;
    res.send("セッション");
  });
