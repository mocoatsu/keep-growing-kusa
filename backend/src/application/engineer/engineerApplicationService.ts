import { Engineer } from "../../domain/models/engineer/Engineer";
import { EngineerId } from "../../domain/models/engineer/EngineerId";
import { EngineerName } from "../../domain/models/engineer/engineerName";
import { Condition } from "../../domain/models/engineer/engineerRepository";
import { IEngineerRepository } from "../../domain/models/engineer/iEnginnerRepository";
import { EngineerService } from "../../domain/services/engineerService";

type EngineerResponse = {
  id: number;
  name: string;
};

export class EngineerApplicationService {
  private engineerRepository: IEngineerRepository;

  constructor(engineerRepository: IEngineerRepository) {
    this.engineerRepository = engineerRepository;
  }

  async findAll(): Promise<EngineerResponse[]> {
    const engineers = await this.engineerRepository.findBy(new Condition());

    return engineers.map((v) => {
      return {
        id: v.id ? v.id().value() : 0,
        name: v.name().value(),
      };
    });
  }

  async findById(id: number): Promise<EngineerResponse> {
    const engineer = await this.engineerRepository.findByPk(new EngineerId(id));

    return {
      id: engineer.id().value(),
      name: engineer.name().value(),
    };
  }

  async signUp(name: string, password: string) {
    const engineerService = new EngineerService(this.engineerRepository);

    if (await engineerService.isExist(new EngineerName(name))) {
      throw Error("この名前のユーザーは既に存在します");
    }

    const engineerPassword = await engineerService.hashEngineerPassword(
      password
    );

    const engineer = new Engineer(
      EngineerId.empty(),
      new EngineerName(name),
      engineerPassword
    );

    this.engineerRepository.create(engineer);
  }

  login() {}
}
