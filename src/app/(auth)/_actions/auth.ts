"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (formData: FormData) => {
  const cookieStore = await cookies();
  const rawFormData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    isEmployee: true,
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/yeshtery/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  });
  const data = await res.json();
  cookieStore.set("token", data.token, { httpOnly: true });
  if (!data) return;
  redirect("/");
};
