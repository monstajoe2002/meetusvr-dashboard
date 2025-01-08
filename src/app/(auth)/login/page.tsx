"use client";
import styles from "../auth.module.css";
export default function LoginPage() {
  return (
    <form className={styles.form} action={"/login"}>
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="example@gmail.com"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="********"
      />
      <div>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className={styles.btn} type="submit">
        Login
      </button>
    </form>
  );
}
