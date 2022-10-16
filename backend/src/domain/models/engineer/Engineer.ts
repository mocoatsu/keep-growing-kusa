import { EngineerId } from "./engineerId";
import { EngineerName } from "./engineerName";

export class Engineer {
  private id: EngineerId;
  private engineerName: EngineerName;

  constructor(id: EngineerId, name: EngineerName) {
    this.id = id;
    this.engineerName = name;
  }

  get name() {
    return this.engineerName;
  }
}
