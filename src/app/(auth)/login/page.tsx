"use client";
import { useState, useTransition } from "react";
import { login } from "../_actions/auth";
import styles from "../auth.module.css";
import { useAuthStore } from "@/store/auth-store";
export default function LoginPage() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isEmailValid = emailRegex.test(email) || email.length > 0;
  const isPasswordValid = password.length > 0; // Basic password check, adjust as needed
  const canSubmit = isEmailValid && isPasswordValid;
  const [isPending, startTransition] = useTransition();
  const { login: clientLogin, message: formMessage } = useAuthStore();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await clientLogin(email, password);
    startTransition(() => {
      login(null, formData);
    });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
      {formMessage && <p style={{ color: "red" }}>{formMessage}</p>}
    </form>
  );
}
