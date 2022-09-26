import { Achievement } from "./achievement";
import { AchievementCondition } from "./achievementCondition";

export class Achievements {
  private achievements: Achievement[] = [];
  constructor(v: Achievement[]) {
    this.achievements = v;
  }

  value() {
    return [...this.achievements];
  }

  unlocked() {
    this.achievements.filter((achievement) => {
      if (achievement.id === null) {
        throw new Error("invalid achievement id exists ");
      }

      const condition = AchievementCondition.fromId(achievement.id);

      return condition.isFullfilled();
    });
  }
}
