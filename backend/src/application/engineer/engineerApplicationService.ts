import { IEngineerRepository } from "../../domain/models/engineer/iEnginnerRepository";

export class EngineerApplicaitionService {
  private engineerRepository: IEngineerRepository;

  constructor(engineerRepository: IEngineerRepository) {
    this.engineerRepository = engineerRepository;
  }

  signUp() {}

  login() {}
}
