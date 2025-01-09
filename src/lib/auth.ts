export const login = async (
  email: string,
  password: string,
  isEmployee: boolean
) => {
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
  return res.json();
};
