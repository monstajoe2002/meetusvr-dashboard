import { user } from "@/lib/auth";
import { signout } from "./(auth)/_actions/auth";
import styles from "./dashboard.module.css";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoLogOut } from "react-icons/io5";
export default async function Home() {
  const userInfo = await user();
  return (
    <main>
      <h1 className={styles.heading}>Good Evening, {userInfo.name}</h1>
      <p className={styles.description}>
        Welcome to a world where virtual reality redefines experiences – a place
        where shopping and events converge to create an extraordinary journey.
      </p>

      <div className={styles.dashboardButtons}>
        <button className={styles.homeButton}>
          <SiHomeassistantcommunitystore size={30} />
          <span>Home</span>
        </button>
        <button className={styles.logoutButton} onClick={signout}>
          <IoLogOut size={30} />
          <span>Logout</span>
        </button>
      </div>
    </main>
  );
}
