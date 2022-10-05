import { EngineerId } from "../engineer/engineerId";
import { EngineerLevelId } from "./EngineerLevelId";
import { EngineerTitle } from "./EngineerTitle";

export class EngineerLevel {
  private static readonly _valueToinstanceMap = new Map<
    number,
    EngineerLevel
  >();

  public static readonly JUNIOR_LEVEL = new EngineerLevel(
    1,
    new EngineerTitle("初心者エンジニア")
  );
  public static readonly MIDDLE_LEVEL = new EngineerLevel(
    2,
    new EngineerTitle("若手のホープ")
  );
  public static readonly SENIOR_LEVEL = new EngineerLevel(
    3,
    new EngineerTitle("つよつよエンジニア")
  );
  public static readonly LEADER_LEVEL = new EngineerLevel(
    4,
    new EngineerTitle("みんなのヒーロー")
  );
  public static readonly SUPER_LEVEL = new EngineerLevel(
    5,
    new EngineerTitle("世界的なスーバーエンジニア")
  );

  private constructor(
    public readonly level: number,
    public readonly title: EngineerTitle
  ) {
    EngineerLevel._valueToinstanceMap.set(level, this);
  }

  static fromId(v: EngineerLevelId) {
    const instance = EngineerLevel._valueToinstanceMap.get(v.value());
    if (!instance) {
      throw new Error(`${v} is Invalid EnginnerLevel Id`);
    }
    return instance;
  }

  static fromContributionsCount(contributionsCount: number) {
    if (contributionsCount < 100) return this.JUNIOR_LEVEL;

    if (contributionsCount < 500) return this.MIDDLE_LEVEL;

    if (contributionsCount < 1000) return this.SENIOR_LEVEL;

    if (contributionsCount < 5000) return this.LEADER_LEVEL;

    return this.SUPER_LEVEL;
  }
}
