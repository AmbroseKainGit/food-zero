"use client";
import React, { useEffect } from "react";
import { signIn } from "@/lib/firebase/auth/loginActions";
import { useRouter } from "next/navigation";
import { selectUser } from "@/lib/redux";
import { useAppSelector } from "@/hooks/redux";
import { LuLogIn } from 'react-icons/lu';

import Image from "next/image";
function Page() {
  const user = useAppSelector(selectUser);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { result, error } = await signIn(email, password);
    if (error) {
      return console.log(error);
    }
    return router.push("/admin");
  };
  useEffect(() => {
    if (user) {
      router.push("/admin");
    }
  }, [user, router]);
  return (
    <div className="wrapper">
      <div className="inner-wrapper-container">
        <div className="text-information-container">
          <h1>Log in</h1>
          <h2>Welcome back</h2>
          <p>
            Please sign in to access your restaurant&apos;s dashboard and manage
            reservations, menus, and staff with ease. Your restaurant&apos;s
            success is just a login away.
          </p>
          <Image
            src="/images/logo.svg"
            width={307}
            height={115}
            alt="Food zero logo"
          />
        </div>
        <div className="login-main-container">
          <div className="form-wrapper">
            <h2 className="mt-60 mb-30">YOUR ACCOUNT</h2>
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
              <button type="submit"><span>Log In</span><LuLogIn/></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
