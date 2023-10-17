import React from "react";
import { Link } from "react-router-dom";

export default function ActivatedAccountPage() {
  return (
    <div>
      <h1 className="text-8xl text-center uppercase font-bold">Account Activated</h1>
      <p className="text-center">You can now login.</p>
      <p className="text-center link link-info">
        <Link to="/login">Click here.</Link>
      </p>
    </div>
  );
}
