export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export type NewUser = Omit<User, "id" | "createdAt" | "updatedAt">;
