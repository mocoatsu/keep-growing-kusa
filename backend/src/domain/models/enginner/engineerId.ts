export class EngineerId {
  private enginnerId: number;

  constructor(v: number) {
    const id = Number(v);
    if (v <= 0) {
      throw new Error("エンジニアIDが正しくありません");
    }
    this.enginnerId = id;
  }

  value() {
    return this.enginnerId;
  }
}
