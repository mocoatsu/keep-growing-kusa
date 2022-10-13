import { Engineer as Instance, PrismaClient } from "@prisma/client";

import { Engineer } from "./Engineer";
import { EngineerId } from "./engineerId";

const prisma = new PrismaClient();

export class EngineerRepository {
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
  // async findBy(condition: EngineerId): Promise<Engineer[]> {}
  // async create(engineer: Engineer): Promise<void> {}
  // async update(engineer: Engineer): Promise<Engineer> {}
  // async delete(id: EngineerId): Promise<void> {}

  private toEntity(instance: Instance) {
    return new Engineer(new EngineerId(instance.id), instance.name);
  }
}
