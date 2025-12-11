import z from "zod";

export const AddTaskSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title must be at most 100 characters"),
  description: z.string().max(500, "Description must be at most 500 characters").optional(),
});

export type AddTaskInput = z.infer<typeof AddTaskSchema>;

export const UpdateTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be at most 100 characters")
    .optional(),
  description: z.string().max(500, "Description must be at most 500 characters").optional(),
  completed: z.boolean().optional(),
});

export type UpdateTaskInput = z.infer<typeof UpdateTaskSchema>;
