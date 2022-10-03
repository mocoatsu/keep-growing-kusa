export class EngineerTitle {
  private engineerTitle: string;

  constructor(v: string) {
    this.engineerTitle = v;
  }

  value() {
    return this.engineerTitle;
  }
}
