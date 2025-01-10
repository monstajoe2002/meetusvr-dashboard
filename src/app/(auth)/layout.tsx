"use client";
import { Tabs } from "@/app/(auth)/_components/tabs";
export default function LoginPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Tabs />
      {children}
    </>
  );
}
