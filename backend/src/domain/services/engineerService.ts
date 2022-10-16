import { EngineerName } from "../models/engineer/engineerName";
import { Condition } from "../models/engineer/engineerRepository";
import { IEngineerRepository } from "../models/engineer/iEnginnerRepository";

export class EngineerService {
  private engineerRepository: IEngineerRepository;
  constructor(v: IEngineerRepository) {
    this.engineerRepository = v;
  }

  async isExist(name: EngineerName): Promise<boolean> {
    const engineer = await this.engineerRepository.findBy(
      new Condition().name(name)
    );

    return engineer ? true : false;
  }
}
