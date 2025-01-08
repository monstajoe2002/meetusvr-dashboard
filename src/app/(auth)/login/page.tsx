import Image from "next/image";
import styles from "../auth.module.css";
export default function LoginPage() {
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <Image
          className={styles.logo}
          src="/logo.jpg"
          alt="logo"
          width={184}
          height={83}
        />
      </section>
    </div>
  );
}
