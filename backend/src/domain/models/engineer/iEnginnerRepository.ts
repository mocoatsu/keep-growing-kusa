import { Engineer } from "./Engineer";
import { EngineerId } from "./EngineerId";
import { Condition } from "./engineerRepository";

export interface IEngineerRepository {
  findByPk: (pk: EngineerId) => Promise<Engineer>;
  findBy: (condition: Condition) => Promise<Engineer[]>;
  create: (engineer: Engineer) => Promise<void>;
  // update: (engineer: Engineer) => Promise<Engineer>;
  // delete: (id: EngineerId) => Promise<void>;
}
