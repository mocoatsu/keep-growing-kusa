import * as argon2 from "argon2";

import { EngineerName } from "../models/engineer/engineerName";
import { EngineerPassword } from "../models/engineer/EngineerPassword";
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

    return engineer.length ? true : false;
  }

  async hashEngineerPassword(password: string) {
    const hash = await argon2.hash(password);

    return new EngineerPassword(hash);
  }
}
