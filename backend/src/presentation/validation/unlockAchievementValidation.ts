import { z } from "zod";

export function unlockValidation(id: string) {
  return z
    .object({
      engineerId: z.number().min(1),
    })
    .parse({ engineerId: Number(id) });
}
