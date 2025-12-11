import { create } from "zustand";
import { persist } from "zustand/middleware";
import CryptoJS from "crypto-js";
import type { NewUser, User } from "../model/types";

interface UserState {
  allUsers: User[];
  isLoading: boolean;
  error: string | null;
}

interface UserActions {
  register: (newUser: NewUser) => Promise<{ success: boolean; message: string; user?: User }>;
  login: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; message: string; user?: User }>;
  getUserByEmail: (email: string) => User | undefined;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      allUsers: [],
      isLoading: false,
      error: null,

      setLoading: (isLoading) => set({ isLoading }),

      setError: (error) => set({ error, isLoading: false }),

      getUserByEmail: (email) => {
        const { allUsers } = get();
        return allUsers.find((user) => user.email === email);
      },

      register: async (newUser) => {
        set({ isLoading: true, error: null });

        try {
          const { allUsers, getUserByEmail } = get();

          const existingUser = getUserByEmail(newUser.email);
          if (existingUser) {
            set({ isLoading: false, error: "Email already registered" });
            return { success: false, message: "Email already registered" };
          }

          const hashedPassword = CryptoJS.SHA256(newUser.password).toString();

          const user: User = {
            id: crypto.randomUUID(),
            name: newUser.name,
            email: newUser.email,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
          };

          set({
            allUsers: [...allUsers, user],
            isLoading: false,
            error: null,
          });

          return { success: true, message: "Registration successful", user };
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Registration failed";
          set({ isLoading: false, error: errorMessage });
          return { success: false, message: errorMessage };
        }
      },

      login: async (email, password) => {
        set({ isLoading: true, error: null });

        try {
          const { getUserByEmail } = get();

          const user = getUserByEmail(email);
          if (!user) {
            set({ isLoading: false, error: "Invalid email or password" });
            return { success: false, message: "Invalid email or password" };
          }

          const hashedPassword = CryptoJS.SHA256(password).toString();
          if (user.password !== hashedPassword) {
            set({ isLoading: false, error: "Invalid email or password" });
            return { success: false, message: "Invalid email or password" };
          }

          set({ isLoading: false, error: null });

          return { success: true, message: "Login successful", user };
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Login failed";
          set({ isLoading: false, error: errorMessage });
          return { success: false, message: errorMessage };
        }
      },
    }),
    {
      name: "users-storage",
      partialize: (state) => ({ allUsers: state.allUsers }),
    },
  ),
);

// Selectors
export const selectAllUsers = (state: UserStore) => state.allUsers;
export const selectIsLoading = (state: UserStore) => state.isLoading;
export const selectError = (state: UserStore) => state.error;
