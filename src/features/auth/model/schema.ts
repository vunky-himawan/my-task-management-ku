import z from "zod";

export const SignUpSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    name: z.string().min(1, "Name is required"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const SignInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type SignInFormData = z.infer<typeof SignInSchema>;

export type SignUpDTO = z.infer<typeof SignUpSchema>;
