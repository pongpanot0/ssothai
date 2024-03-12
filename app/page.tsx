"use client";
import Hero from "@/components/Hero";
import Activitynews from "@/components/Activitynews";
import { getServerSession } from "next-auth";

import { useSession } from "next-auth/react";
export default function Home() {
  const { data } = useSession();
  return (
    <>
      {JSON.stringify(data)}
      <Hero />
      {/*       <News /> */}
      <Activitynews />
    </>
  );
}
