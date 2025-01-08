"use client";
export default function LoginPage() {
  return (
    <main>
      <form action={"/login"}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
