import { z } from "zod";

const getEngineer = z.object({
  id: z.number().min(1),
});

export type Engineer = z.infer<typeof getEngineer>;

export function getEngineerValidation(id: string) {
  return getEngineer.parse({ id: Number(id) });
}
