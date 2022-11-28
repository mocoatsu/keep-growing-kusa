import { z } from "zod";

const engineer = z.object({
  name: z.string().min(1),
  password: z.string().min(1),
});

export function authValidation(name: string, password: string) {
  return engineer.parse({ name: name, password: password });
}
