import { user } from "@/lib/auth";
import { signout } from "./(auth)/_actions/auth";
import styles from "./dashboard.module.css";
import { SiHomeassistantcommunitystore } from "react-icons/si";
export default async function Home() {
  const userInfo = await user();
  return (
    <main>
      <h1 className={styles.heading}>Good Evening, {userInfo.name}</h1>
      <p className={styles.description}>
        Welcome to a world where virtual reality redefines experiences – a place
        where shopping and events converge to create an extraordinary journey.
      </p>
      <button className={styles.homeButton}>
        <SiHomeassistantcommunitystore />
        <span>Home</span>
      </button>
      <button onClick={signout}>Sign out</button>
    </main>
  );
}
