import { fetchContributions } from "../../infrastructure/Github/githubApi";
import { GetContributionsQuery } from "../../infrastructure/GraphQL/type";

export class ContributionService {
  constructor() {}

  async fetchContributions(): Promise<GetContributionsQuery> {
    return await fetchContributions();
  }
}
