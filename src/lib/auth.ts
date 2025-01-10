import { cookies } from "next/headers";

export const user = async () => {
  const cookieStore = await cookies();
  const cookieData = cookieStore.get("meetus-token");
  if (!cookieData) {
    return null;
  }
  const token = cookieData.value;
  const userInfoRes = await fetch(
    "https://api-yeshtery.dev.meetusvr.com/v1/user/info",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!userInfoRes.ok) {
    return await userInfoRes.text();
  }
  const userInfo = await userInfoRes.json();
  return userInfo;
};
