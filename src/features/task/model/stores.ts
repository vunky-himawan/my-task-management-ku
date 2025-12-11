import { create } from "zustand";
import type { NewTask, Task, UpdateTask } from "./types";
import { persist } from "zustand/middleware";

interface TaskState {
  allTasks: Task[];
  isLoading: boolean;
  error: string | null;
}

interface TaskActions {
  addTask: (newTask: NewTask) => Promise<{ success: boolean; message: string; task?: Task }>;
  updateTask: (
    id: string,
    data: UpdateTask,
  ) => Promise<{ success: boolean; message: string; task?: Task }>;
  deleteTask: (id: string) => Promise<{ success: boolean; message: string }>;
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
            userId: newTask.userId,
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

      updateTask: async (id, data) => {
        set({ isLoading: true, error: null });

        try {
          const { allTasks } = get();
          const taskIndex = allTasks.findIndex((task) => task.id === id);

          if (taskIndex === -1) {
            set({ isLoading: false, error: "Task not found" });
            return { success: false, message: "Task not found" };
          }

          const updatedTask: Task = {
            ...allTasks[taskIndex],
            ...data,
            updatedAt: new Date(),
          };

          const updatedTasks = [...allTasks];
          updatedTasks[taskIndex] = updatedTask;

          set({ allTasks: updatedTasks, isLoading: false });
          return { success: true, message: "Task updated successfully", task: updatedTask };
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Unknown error";
          set({ isLoading: false, error: errorMessage });
          return { success: false, message: errorMessage };
        }
      },

      deleteTask: async (id) => {
        set({ isLoading: true, error: null });

        try {
          const { allTasks } = get();
          const taskExists = allTasks.some((task) => task.id === id);

          if (!taskExists) {
            set({ isLoading: false, error: "Task not found" });
            return { success: false, message: "Task not found" };
          }

          const filteredTasks = allTasks.filter((task) => task.id !== id);

          set({ allTasks: filteredTasks, isLoading: false });
          return { success: true, message: "Task deleted successfully" };
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
