import express from "express";
import { EngineerApplicaitionService } from "../../application/engineer/engineerApplicationService";
import { EngineerRepository } from "../../domain/models/engineer/engineerRepository";
import { sessionExpress } from "../middleware";
import { signUpValidation } from "../validation/authValidation";

export const router = express.Router();

router
  .use(sessionExpress)
  .post("/signup", async (req, res) => {
    const params = signUpValidation(req.body.name, req.body.password);
    const engineerApplicaitionService = new EngineerApplicaitionService(
      new EngineerRepository()
    );
    await engineerApplicaitionService.signUp(params.name, params.password);
    res.json({ success: "ユーザの作成に成功しました" });
  })
  .get("/login", async (req, res) => {
    req.session.enginnerId = 1;
    res.send("セッション");
  })
  .get("/", async (req, res) => {
    req.session.enginnerId = 1;
    res.send("セッション");
  });
