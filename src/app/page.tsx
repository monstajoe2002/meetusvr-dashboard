"use client";
import { signout } from "./(auth)/_actions/auth";
import styles from "./dashboard.module.css";
import { useAuthStore } from "@/store/auth-store";
import { useTransition } from "react";
export default function Home() {
  const { user, logout } = useAuthStore();
  const [isPending, startTransition] = useTransition();
  const handleLogout = async () => {
    await signout();
    startTransition(logout);
  };

  return (
    <main>
      <h1 className={styles.heading}>Good Evening, {user?.name}</h1>
      <div>
        <button disabled={isPending} onClick={handleLogout}>
          <span>Logout</span>
        </button>
      </div>
    </main>
  );
}
