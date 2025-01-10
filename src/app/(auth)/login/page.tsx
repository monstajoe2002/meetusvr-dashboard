"use client";
import { useActionState, useState } from "react";
import { login } from "../_actions/auth";
import styles from "../auth.module.css";
export default function LoginPage() {
  const [message, formAction, isPending] = useActionState(login, null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isEmailValid = emailRegex.test(email) || email.length > 0;
  const isPasswordValid = password.length > 0; // Basic password check, adjust as needed
  const canSubmit = isEmailValid && isPasswordValid;

  return (
    <form action={formAction} className={styles.form}>
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="example@gmail.com"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="********"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button
        disabled={isPending || !canSubmit}
        className={styles.btn}
        type="submit"
      >
        Login
      </button>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </form>
  );
}
