import { VERCEL_URL } from "@/consts";
import { createFrames, Button } from "frames.js/next";

const frames = createFrames({
  basePath: "/frames",
});

const handleRequest = frames(async (ctx) => {
  return {
    image:(
      <div tw="flex flex-col gap-3 p-5 items-center justify-center text-center w-full h-full bg-neutral-800">
        <h1 tw="text-[5rem] text-sky-300 font-bold">Welcome to Quinn</h1>
        <p tw="text-[2rem] text-amber-200 font-semibold px-32">
          Quinn is an arena for Moxie Fans to place wager on contests and earn
          banger rewards.
        </p>
      </div>
    ),
    buttons: [
      <Button action='post' target={`${VERCEL_URL}/getGames`}>
        Jump to Arena ⚔️
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
