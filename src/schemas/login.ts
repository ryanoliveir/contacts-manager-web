import z from "zod";

export const loginFormSchema = z.strictObject({
  email: z.email("E-email inválido"),
  password: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
