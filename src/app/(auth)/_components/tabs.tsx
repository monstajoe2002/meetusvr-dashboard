import React from "react";
import { usePathname, useRouter } from "next/navigation";

export const Tabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = React.useTransition();
  const [activeTab, setActiveTab] = React.useState("/login");
  const handleTabClick = (path: string) => {
    if (isPending) return;
    startTransition(() => router.push(path));
    setActiveTab(path);
  };

  return (
    <div>
      <div className="tabs">
        <button disabled={isPending} onClick={() => handleTabClick("/login")}>
          Login
        </button>
        <button disabled={isPending} onClick={() => handleTabClick("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
};
