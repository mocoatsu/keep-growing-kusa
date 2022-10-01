export class EngineerId {
  private engineerId: number;

  constructor(v: number) {
    const id = Number(v);
    if (v <= 0) {
      throw new Error("エンジニアIDが正しくありません");
    }
    this.engineerId = id;
  }

  value() {
    return this.engineerId;
  }
}
