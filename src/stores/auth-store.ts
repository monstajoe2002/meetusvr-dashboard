import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { login } from "@/lib/auth";
export type User = {
  id: number;
  name: string;
  email: string;
  roles: string[];
  imageUrl: string;
  organizationId: number;
  isEmployee: boolean;
  shopId: number;
};

export type AuthState = {
  user: User | null;
  token: string;
};
export type AuthActions = {
  login: (
    email: string,
    password: string,
    isEmployee: boolean
  ) => Promise<User>;
  logout: () => void;
};

export const defaultInitState: AuthState = {
  user: null,
  token: "",
};
export const createAuthStore = (initState: AuthState = defaultInitState) => {
  return createStore<AuthState>((set) => ({
    ...initState,
    login,
    logout: () => set({ user: null, token: "" }),
  }));
};
