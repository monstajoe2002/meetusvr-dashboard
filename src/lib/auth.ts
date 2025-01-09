export const login = async (
  email: string,
  password: string,
  isEmployee: boolean
) => {
  const response = await fetch(
    "https://api-yeshtery.dev.meetusvr.com/v1/yeshtery/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        isEmployee,
      }),
    }
  );
  return response.json();
};
