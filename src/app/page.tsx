"use client";

import Page from "@/app/2025/page";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Home page");
  });

  return (
    <>
      <head>
        <link rel="icon" href="/2025/forest.svg" />
        <title>Aftrecki</title>
      </head>
      <Page></Page>
    </>
  );
}
