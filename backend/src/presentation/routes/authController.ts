import express from "express";
import { EngineerApplicationService } from "../../application/engineer/engineerApplicationService";
import { EngineerRepository } from "../../domain/models/engineer/engineerRepository";
import { sessionExpress } from "../middleware";
import { authValidation } from "../validation/authValidation";

export const router = express.Router();

router
  .use(sessionExpress)
  .post("/signup", async (req, res) => {
    const params = authValidation(req.body.name, req.body.password);
    const engineerApplicaitionService = new EngineerApplicationService(
      new EngineerRepository()
    );
    await engineerApplicaitionService.signUp(params.name, params.password);
    res.json({ success: "ユーザの作成に成功しました" });
  })
  .post("/login", async (req, res) => {
    const params = authValidation(req.body.name, req.body.password);

    const engineerApplicaitionService = new EngineerApplicationService(
      new EngineerRepository()
    );
    const engineer = await engineerApplicaitionService.getLoginEngineer(
      params.name,
      params.password
    );
    if (!engineer) {
      return res.status(401).json({ message: "ログインに失敗しました" });
    }
    req.session.engineerId = engineer.id().value();
    return res.json({ message: "ログインに成功しました" });
  })
  .get("/", async (req, res) => {
    res.send("セッション");
  });
