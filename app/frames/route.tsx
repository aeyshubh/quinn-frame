import { VERCEL_URL } from "@/consts";
import { createFrames, Button } from "frames.js/next";

const frames = createFrames({
  basePath: "/frames",
});

const handleRequest = frames(async (ctx) => {
  return {
    image: `${VERCEL_URL}/start.png`,
    buttons: [
      <Button action='post' target={`${VERCEL_URL}/getGames`}>
        Less Go!
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
