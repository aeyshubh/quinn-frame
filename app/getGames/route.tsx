
import { VERCEL_URL } from "@/consts";
import { createFrames, Button } from "frames.js/next";
import { gql, GraphQLClient } from "graphql-request";
import { init } from "@airstack/node";
import {ethers} from "ethers";



const frames = createFrames({
  basePath: "/frames",
});

const handleRequest = frames(async (ctx) => {
  console.log("In");
  const fid = ctx.message?.requesterFid;

const provider = new ethers.JsonRpcProvider(process.env.BASE_SEPOLIA_RPC);
  //Points


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
        <Button action='post' target={`${VERCEL_URL}/moxie`}>
        Moxie earned
      </Button>,
     <Button action='post' target={`${VERCEL_URL}/fanToken`}>
        FT Volume
      </Button>,
      <Button action='post' target={`${VERCEL_URL}`}>
        Go Back
      </Button>,
    ],

  };
});

export const GET = handleRequest;
export const POST = handleRequest;
