import prisma from "../../../client";
import { engineer as Instance, Prisma } from "@prisma/client";

import { Engineer } from "./Engineer";
import { EngineerId } from "./EngineerId";
import { EngineerName } from "./engineerName";
import { EngineerPassword } from "./EngineerPassword";
import { IEngineerRepository } from "./iEnginnerRepository";

export class EngineerRepository implements IEngineerRepository {
  async findByPk(pk: EngineerId): Promise<Engineer> {
    const instance = await prisma.engineer.findUnique({
      where: { id: pk.value() },
    });
    if (!instance) {
      throw new Error("Invalid EnginnerId. No Instance found");
    }
    return this.toEntity(instance);
  }

  async findBy(condition: Condition = new Condition()): Promise<Engineer[]> {
    const instances = await prisma.engineer.findMany(condition.build());
    return instances.map((i) => {
      return this.toEntity(i);
    });
  }

  async findByWithPassword(
    condition: Condition = new Condition()
  ): Promise<Engineer[]> {
    const instances = await prisma.engineer.findMany(condition.build());
    return instances.map((i) => {
      return this.toEntityWithPassword(i);
    });
  }

  async create(v: Engineer) {
    if (v.password().isEmpty()) {
      throw new Error("password needed");
    }
    const instance = await prisma.engineer.create({
      data: {
        name: v.name().value(),
        password: v.password().value(),
      },
    });
    return this.toEntity(instance);
  }
  // async update(engineer: Engineer): Promise<Engineer> {}
  // async delete(id: EngineerId): Promise<void> {}

  private toEntity(instance: Instance) {
    return new Engineer(
      new EngineerId(instance.id),
      new EngineerName(instance.name),
      EngineerPassword.empty() // passwordは外部に露出させない
    );
  }

  /** クライアントに値を返却しない処理でのみ使用可能 */
  private toEntityWithPassword(instance: Instance) {
    return new Engineer(
      new EngineerId(instance.id),
      new EngineerName(instance.name),
      new EngineerPassword(instance.password)
    );
  }
}

export class Condition {
  private condition: Prisma.engineerWhereInput;
  constructor(v: Prisma.engineerWhereInput = {}) {
    this.condition = v;
  }

  build() {
    return { where: this.condition };
  }

  name(v: EngineerName) {
    return new Condition({
      ...this.condition,
      name: v.value(),
    });
  }
}
