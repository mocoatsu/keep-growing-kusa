export class EngineerId {
  private static readonly EMPTY = 0;
  private static readonly MIN = 0;
  private engineerId: number;

  constructor(v: number) {
    if (v <= EngineerId.MIN) {
      throw new Error("エンジニアIDが正しくありません");
    }

    this.engineerId = v;
  }

  value() {
    return this.engineerId;
  }

  static empty() {
    return new EngineerId(EngineerId.EMPTY);
  }
}
