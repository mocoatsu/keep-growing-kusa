import { EngineerId } from "./engineerId";

export class Engineer {
  private id: EngineerId;
  private name: String;

  constructor(id: EngineerId, name: String) {
    this.id = id;
    this.name = name;
  }
}
