import { z } from "zod";

export function unlockValidation(id: number | undefined) {
  return z
    .object({
      engineerId: z.number().min(1),
    })
    .parse({ engineerId: Number(id) });
}
