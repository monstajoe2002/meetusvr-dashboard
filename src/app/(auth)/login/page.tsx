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
    <div className={styles.formContainer}>
      <h1 className={styles.heading}>Welcome Back</h1>
      <p className={styles.text}>
        Step into our shopping metaverse for an unforgettable shopping
        experience.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="example@gmail.com"
        />
        <input
          type="password"
          name="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          disabled={isPending || !canSubmit}
          className={styles.btn}
          type="submit"
        >
          Login
        </button>
        {formMessage && <p style={{ color: "red" }}>{formMessage}</p>}
        <p
          style={{
            color: "#62626b",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          Don&apos;t have an account? Sign up
        </p>
      </form>
    </div>
  );
}
