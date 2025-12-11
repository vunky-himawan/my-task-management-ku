export type Task = {
  id: string;
  userId: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type NewTask = Omit<Task, "id" | "createdAt" | "updatedAt" | "completed">;

export type UpdateTask = Partial<Omit<Task, "id" | "createdAt">>;

export type TaskFilter = "all" | "completed" | "pending";
