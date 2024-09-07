import { fetchMetadata } from "frames.js/next";
import { Metadata } from "next";
import { VERCEL_URL } from "@/consts";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Check your Social Rank",
    other: {
      ...(await fetchMetadata(new URL("/frames", VERCEL_URL))),
    },
  };
}

export default async function Home() {
  return <div>Airstack Social Rank</div>;
}
