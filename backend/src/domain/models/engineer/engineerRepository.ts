import { Engineer as Instance, Prisma, PrismaClient } from "@prisma/client";

import { Engineer } from "./Engineer";
import { EngineerId } from "./EngineerId";
import { EngineerName } from "./engineerName";
import { EngineerPassword } from "./EngineerPassword";
import { IEngineerRepository } from "./iEnginnerRepository";

const prisma = new PrismaClient();

export class EngineerRepository implements IEngineerRepository {
  async findByPk(pk: EngineerId): Promise<Engineer> {
    const instance = await prisma.engineer.findUnique({
      where: {
        id: pk.value(),
      },
    });
    if (!instance) {
      throw new Error("Invalid EnginnerId. No Instance found");
    }
    return this.toEntity(instance);
  }

  async findBy(condition: Condition): Promise<Engineer[]> {
    const instances = await prisma.engineer.findMany(condition.build());
    if (!instances) {
      throw new Error("Invalid condition.");
    }

    return instances.map((i) => {
      return this.toEntity(i);
    });
  }

  async create(v: Engineer): Promise<Engineer> {
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
}

export class Condition {
  private condition: Prisma.EngineerWhereInput;
  constructor(v: Prisma.EngineerWhereInput = {}) {
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
