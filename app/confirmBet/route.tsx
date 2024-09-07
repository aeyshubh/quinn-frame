
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
   const userChoice = ctx.message?.buttonIndex;
   const userBetAmount = ctx.message?.inputText;
const provider = new ethers.JsonRpcProvider(process.env.BASE_SEPOLIA_RPC);
  //Points


  return {
    image: (
        <div tw="flex flex-col p-5 items-center justify-center text-center w-full h-full bg-neutral-800">
          <h1 tw="text-[3rem] text-neutral-200">Hey anon 👋</h1>
          <div tw="flex flex-col items-center bg-neutral-900 border border-neutral-600 rounded-[3rem] -mt-5 px-20 py-8">
            <div tw="flex items-center">
              <img
                src="https://github.com/shadcn.png"
                tw="w-40 h-40 rounded-full mr-5"
              />
              <div tw="flex flex-col">
                <h1 tw="text-[1.8rem] text-neutral-300">I waged on</h1>
                <p tw="text-[2.5rem] text-sky-300 -mb-5 -mt-7">@betashop.eth</p>
                <p tw="text-[2rem] text-amber-300">Picked 16 times</p>
              </div>
            </div>
            <div tw="w-full flex bg-sky-300 text-neutral-800 rounded-[2.4rem] px-10 py-3">
              Place your wager 🎯
            </div>
          </div>
        </div>
      ),
    buttons: [
        <Button action='tx' target={`${VERCEL_URL}/tx?choise=${userChoice}&amt=${userBetAmount}`} post_url={`${VERCEL_URL}/tx-success`}>
        Confirm Bet
      </Button>,
      <Button action='post' target={`${VERCEL_URL}/moxie`}>
        Go Back
      </Button>,
    ],

  };
});

export const GET = handleRequest;
export const POST = handleRequest;
