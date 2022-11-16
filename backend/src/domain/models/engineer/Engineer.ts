import { EngineerId } from "./EngineerId";
import { EngineerName } from "./engineerName";
import { EngineerPassword } from "./EngineerPassword";

export class Engineer {
  private engineerId: EngineerId;
  private engineerName: EngineerName;
  private engineerPassword: EngineerPassword;

  constructor(id: EngineerId, name: EngineerName, password: EngineerPassword) {
    this.engineerId = id;
    this.engineerName = name;
    this.engineerPassword = password;
  }

  id() {
    return this.engineerId;
  }

  name() {
    return this.engineerName;
  }

  password() {
    return this.engineerPassword;
  }
}
