"use client";
import Image from "next/image";
import styles from "@/app/(auth)/auth.module.css";
import { Tabs } from "@/app/(auth)/_components/tabs";
export default function LoginPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <Image
          className={styles.logo}
          src="/logo.jpg"
          alt="logo"
          width={184}
          height={83}
        />
        <Tabs />
        {children}
      </section>
    </div>
  );
}
