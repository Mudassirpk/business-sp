"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Login() {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  async function login(e: FormEvent) {
    e.preventDefault();
    console.log(creds);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="w-[350px] text-right flex items-center gap-2 my-4">
        <span className="text-2xl font-semibold text-slate-700">Login</span>
        <span className="text-4xl font-bold text-secondary-b"> - Business</span>
      </h1>
      <form
        onSubmit={login}
        className="p-4 rounded-xl border-secondary-b border w-[350px] space-y-4"
      >
        <Label className="w-full flex flex-col gap-2">
          <span>Email</span>
          <Input
            required
            value={creds.email}
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
            placeholder="example@gmail.com"
            type="email"
          />
        </Label>
        <Label className="w-full flex flex-col gap-2">
          <span>Password</span>
          <Input
            required
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
            placeholder="example@gmail.com"
            type="password"
          />
        </Label>
        <Button
          type="submit"
          className="bg-secondary-b w-full hover:bg-secondary-b"
        >
          Login
        </Button>
        <div className="my-2">
          <Link href="/signup" className="text-secondary-b">
            <span className="text-gray-700">Don't have an account?</span>&nbsp;
            <span className="hover:underline">Signup here</span>
          </Link>
        </div>
      </form>
    </main>
  );
}
