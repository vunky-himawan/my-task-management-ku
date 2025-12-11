export type Task = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type NewTask = Omit<Task, "id" | "createdAt" | "updatedAt">;

export type UpdateTask = Partial<Omit<Task, "id" | "createdAt">>;

export type TaskFilter = "all" | "completed" | "pending";
