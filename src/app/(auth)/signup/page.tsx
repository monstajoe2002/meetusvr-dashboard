"use client";
import styles from "../auth.module.css";
export default function SignupPage() {
  return (
    <form className={styles.form} action={"/login"}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" placeholder="Input your name here" />
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        required
        placeholder="example@gmail.com"
      />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" required placeholder="********" />
      <div>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className={styles.btn} type="submit">
        Signup
      </button>
    </form>
  );
}
