"use client";
import { login } from "../_actions/auth";
import styles from "../auth.module.css";
import { useFormStatus } from "react-dom";
export default function LoginPage() {
  const { pending } = useFormStatus();
  return (
    <form action={login} className={styles.form}>
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
      <button disabled={pending} className={styles.btn} type="submit">
        Login
      </button>
    </form>
  );
}
