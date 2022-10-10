import express from "express";
import { sessionExpress } from "../middleware";

export const router = express.Router();

router
  .use(sessionExpress)
  .post("/signup", async (req, res) => {
    res.json("hello");
  })
  // .get("/", async (req, res) => {
  //   req.session.enginnerId = 1;
  //   res.redirect("/login");
  // })
  .get("/login", async (req, res) => {});
