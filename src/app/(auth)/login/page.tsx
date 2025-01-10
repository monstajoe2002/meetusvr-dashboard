"use client";
import { useActionState } from "react";
import { login } from "../_actions/auth";
import styles from "../auth.module.css";
export default function LoginPage() {
  const [message, formAction, isPending] = useActionState(login, null);
  return (
    <form action={formAction} className={styles.form}>
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
      <button disabled={isPending} className={styles.btn} type="submit">
        Login
      </button>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </form>
  );
}
