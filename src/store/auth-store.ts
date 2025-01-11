import { User } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  fetchUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState, [["zustand/persist", AuthState]]>(
  persist(
    (set) => ({
      token: null,
      user: null,
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
        if (data.token) {
          set({ token: data.token });
          await useAuthStore.getState().fetchUser();
        } else {
          throw new Error(data.message);
        }
      },
      logout: () => {
        set({ token: null, user: null });
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
          set({ user: userInfo });
        } else {
          set({ token: null, user: null });
        }
      },
    }),
    {
      name: "meetus-user", // name of the item in the storage (must be unique)
    }
  )
);
