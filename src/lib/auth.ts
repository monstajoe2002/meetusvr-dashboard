import { cookies } from "next/headers";

export const user = async () => {
  const cookieStore = await cookies();
  const cookieData = cookieStore.get("meetus-user");
  if (!cookieData) {
    return null;
  }
  const { userInfo } = JSON.parse(cookieData.value);
  return userInfo;
};
