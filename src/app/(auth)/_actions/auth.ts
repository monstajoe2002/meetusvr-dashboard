"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const login = async (_initialState: unknown, formData: FormData) => {
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
  if (!data.token) return data.message;
  cookieStore.set("meetus-user", JSON.stringify(data), { httpOnly: true });
  redirect("/");
};

export const signout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("meetus-user");
  redirect("/login");
};
