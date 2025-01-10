"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (
  email: string,
  password: string,
  isEmployee: boolean
) => {
  const cookieStore = await cookies();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/yeshtery/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      isEmployee,
    }),
  });
  const data = await res.json();
  cookieStore.set("token", data.token, { httpOnly: true });
  redirect("/");
};
