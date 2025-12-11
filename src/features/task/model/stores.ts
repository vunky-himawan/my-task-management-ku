import { create } from "zustand";
import type { NewTask, Task } from "./types";
import { persist } from "zustand/middleware";

interface TaskState {
  allTasks: Task[];
  isLoading: boolean;
  error: string | null;
}

interface TaskActions {
  addTask: (newTask: NewTask) => Promise<{ success: boolean; message: string; task?: Task }>;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

type TaskStore = TaskState & TaskActions;

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      allTasks: [],
      isLoading: false,
      error: null,

      setLoading: (isLoading) => set({ isLoading }),

      setError: (error) => set({ error, isLoading: false }),

      addTask: async (newTask) => {
        set({ isLoading: true, error: null });

        try {
          const { allTasks } = get();

          const task: Task = {
            id: crypto.randomUUID(),
            title: newTask.title,
            description: newTask.description,
            completed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          };

          set({ allTasks: [...allTasks, task], isLoading: false });
          return { success: true, message: "Task added successfully", task };
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Unknown error";
          set({ isLoading: false, error: errorMessage });
          return { success: false, message: errorMessage };
        }
      },
    }),
    {
      name: "task-storage",
    },
  ),
);

export const selectIsLoading = (state: TaskState) => state.isLoading;
export const selectAllTasks = (state: TaskState) => state.allTasks;
export const selectError = (state: TaskState) => state.error;
