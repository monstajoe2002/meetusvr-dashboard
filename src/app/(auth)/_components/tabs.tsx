import React from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "../auth.module.css";
export const Tabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = React.useTransition();
  const handleTabClick = (path: string) => {
    if (isPending) return;
    startTransition(() => router.push(path));
  };

  return (
    <div>
      <div aria-disabled={isPending} className={styles.tabs}>
        <button
          className={pathname === "/login" ? styles.activeTab : undefined}
          disabled={isPending}
          onClick={() => handleTabClick("/login")}
        >
          Login
        </button>
        <button
          className={pathname === "/signup" ? styles.activeTab : ""}
          disabled={isPending}
          onClick={() => handleTabClick("/signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
