export class EngineerName {
  private engineerName: string;

  constructor(v: string) {
    if (v.length <= 0) {
      throw new Error("名前は1文字以上です");
    }
    this.engineerName = v;
  }

  value() {
    return this.engineerName;
  }
}
