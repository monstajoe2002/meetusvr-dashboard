"use client";
import { signout } from "./(auth)/_actions/auth";
import styles from "./dashboard.module.css";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoLogOut } from "react-icons/io5";
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
      <p className={styles.description}>
        Welcome to a world where virtual reality redefines experiences – a place
        where shopping and events converge to create an extraordinary journey.
      </p>

      <div className={styles.dashboardButtons}>
        <button disabled={isPending} className={styles.homeButton}>
          <SiHomeassistantcommunitystore size={30} />
          <span>Home</span>
        </button>
        <button
          disabled={isPending}
          className={styles.logoutButton}
          onClick={handleLogout}
        >
          <IoLogOut size={30} />
          <span>Logout</span>
        </button>
      </div>
    </main>
  );
}
