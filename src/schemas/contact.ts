import z from "zod";

export const contactFormSchema = z.strictObject({
  name: z.string().min(4, "Nome deve ter no mínimo 4 caracteres."),
  phone: z.string().min(10, "Telefone deve ter no mínimo 10 caracteres"),
  email: z.email("E-email inválido"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
