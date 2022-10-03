export class EngineerLevelId {
  private engineerLevelId: number;

  constructor(v: number) {
    this.engineerLevelId = v;
  }
  value() {
    return this.engineerLevelId;
  }
}
