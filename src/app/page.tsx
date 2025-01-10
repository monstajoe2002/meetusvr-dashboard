import { user } from "@/lib/auth";
import { signout } from "./(auth)/_actions/auth";

export default async function Home() {
  const userInfo = await user();
  return (
    <main>
      <h1>Welcome aboard, {userInfo.name}</h1>
      <button onClick={signout}>Sign out</button>
    </main>
  );
}
