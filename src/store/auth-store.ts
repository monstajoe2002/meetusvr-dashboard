import { User } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token?: string;
  user: User | null;
  message?: string;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  fetchUser: () => Promise<void>;
}

const initialState = {
  token: undefined,
  user: null,
  message: undefined,
};
export const useAuthStore = create<AuthState, [["zustand/persist", AuthState]]>(
  persist(
    (set) => ({
      token: undefined,
      user: null,
      message: undefined,
      login: async (email, password) => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/yeshtery/token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, isEmployee: true }),
          }
        );
        const data = await res.json();
        if (!data.token) {
          set({ message: data.message });
          return;
        }
        set({ token: data.token, message: undefined });
        await useAuthStore.getState().fetchUser();
      },
      logout: () => {
        set((s) => ({ ...s, initialState }), true);
      },
      fetchUser: async () => {
        const { token } = useAuthStore.getState();
        if (!token) return;
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/user/info`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.ok) {
          const userInfo = await res.json();
          set({ user: userInfo, message: undefined, token: undefined });
        } else {
          set({ user: null });
        }
      },
    }),

    {
      name: "meetus-user",
    }
  )
);
