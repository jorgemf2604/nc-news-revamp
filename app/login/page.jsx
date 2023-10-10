"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
    router.push("/");
  };

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut();
  //   router.refresh();
  // };

  return (
    <div className="pt-32 px-2 text-neutral-600">
      <div className="bg-neutral-800/30 shadow-2xl p-5 gap-4 flex flex-col max-w-sm mx-auto rounded-lg">
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="p-2"
          placeholder="Enter email..."
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="p-2"
          placeholder="Enter password..."
        />
        <button onClick={handleSignUp} className="nav-button bg-white">
          Sign up
        </button>
        <button onClick={handleSignIn} className="nav-button bg-white">
          Sign in
        </button>
        {/* <button onClick={handleSignOut} className="nav-button bg-white">
          Sign out
        </button> */}
      </div>
    </div>
  );
}

// TODO add a not-found at root level
// TODO change folder structures: group app (dashboard) and login (auth) with their own layouts
// TODO add specific layout/header for auth pages
// TODO create specific pages for login and singup
// TODO create a reusable authForm component
// TODO add logout button (own client component) somewhere (in the dashborad header?).
// TODO change header so it accepts a user and displays it
// TODO create a sticky black banner in/over the header with the user name and a logout button
// TODO add a verify page: We have sent you the link and when sing up push to verify
// TODO move the supabase read from the articles page to an api route so we can use fetch
