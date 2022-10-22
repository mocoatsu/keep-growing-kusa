export class EngineerPassword {
  private static readonly EMPTY = "";
  // TODO: 適切な値を設定
  private engineerPassword: string;

  constructor(v: string) {
    this.engineerPassword = v;
  }

  value() {
    return this.engineerPassword;
  }

  isEmpty() {
    return this.value() === EngineerPassword.EMPTY;
  }

  static empty() {
    return new EngineerPassword(EngineerPassword.EMPTY);
  }
}
