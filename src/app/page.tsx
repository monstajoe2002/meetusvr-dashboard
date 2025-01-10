import { user } from "@/lib/auth";

export default async function Home() {
  const userInfo = await user();
  return (
    <main>
      <h1>Welcome aboard, {userInfo.name}</h1>
    </main>
  );
}
