"use client";

import Page from "@/app/2026/page";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Home page");
  });

  return (
    <>
      <head>
        <link rel="icon" href="/2025/forest.svg" />
        <title>Aftrecki 2026</title>
      </head>
      <Page></Page>
    </>
  );
}
