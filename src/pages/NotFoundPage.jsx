import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1 className="text-8xl text-center uppercase font-bold">404 - Page Not Found</h1>
      <p className="text-center">Return home.</p>
      <p className="text-center link link-info">
        <Link to="/">Click here.</Link>
      </p>
    </div>
  );
}
