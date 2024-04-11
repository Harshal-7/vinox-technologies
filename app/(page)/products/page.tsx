"use client";
import React, { useState } from "react";

export const Products = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<any>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("email", email);

    await fetch("/api/subscribe", {
      body: formData.toString(),
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    }).then(async (result) => {
      setResult(await result.json());
    });
  };

  return (
    <div className="container mx-auto mt-44 mb-44">
      <h1 className="m-4">Sign up to our newsletter!</h1>
      {/* 👇 wire-up the handleSubmit handler */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your email"
          name="email"
          // 👇 wire-up the controlled state
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      {/* show the data returned by the api */}
      Result
      <pre>{JSON.stringify(result, null, 4)}</pre>
    </div>
  );
};
export default Products;
