"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { signIn } from "@/lib/firebase/auth/loginActions";
import { useRouter } from "next/navigation";
import { selectUser } from "@/lib/redux";
function Page() {
  const user = useSelector(selectUser);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { result, error } = await signIn(email, password);
    if (error) {
      return console.log(error);
    }
    // else successful
    console.log(result);
    return router.push("/admin");
  };
  useEffect(() => {
    if (user) {
      router.push("/admin");
    }
  }, [user, router]);
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              autoComplete="email"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              autoComplete="current-password"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
