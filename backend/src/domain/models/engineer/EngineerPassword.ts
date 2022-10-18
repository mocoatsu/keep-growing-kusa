export class EngineerPassword {
  private static readonly EMPTY = "";
  // TODO: 適切な値を設定
  private static readonly MIN_LENGTH = 100;
  private engineerPassword: string;

  constructor(v: string) {
    if (v.length <= EngineerPassword.MIN_LENGTH) {
      throw new Error(
        `passwordの長さは${EngineerPassword.MIN_LENGTH}以上としてください`
      );
    }

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
