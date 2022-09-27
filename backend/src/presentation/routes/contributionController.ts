import express from "express";
import { ContributionApplicationService } from "../../application/contributions/contributionApplicationService";

export const router = express.Router();

router.get("/contributions", async (req, res) => {
  const contributionApplicationService = new ContributionApplicationService();

  const contributions =
    await contributionApplicationService.fetchContributions();

  res.json(contributions);
});
