import { Engineer } from "./Engineer";
import { EngineerId } from "./engineerId";

export interface IEngineerRepository {
  findByPk: (pk: EngineerId) => Promise<Engineer>;
  findBy: (condition: EngineerId) => Promise<Engineer[]>;
  create: (engineer: Engineer) => Promise<void>;
  update: (engineer: Engineer) => Promise<Engineer>;
  delete: (id: EngineerId) => Promise<void>;
}
