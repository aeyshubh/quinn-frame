
import { VERCEL_URL } from "@/consts";
import { createFrames, Button } from "frames.js/next";
import { gql, GraphQLClient } from "graphql-request";
import { init } from "@airstack/node";
import {ethers} from "ethers";
const AIRSTACK_API_URL = "https://api.airstack.xyz/graphql";


const frames = createFrames({
  basePath: "/frames",
});

const handleRequest = frames(async (ctx) => {
const AIRSTACK_API_KEY = process.env.AIRSTACK_API_KEY;
  console.log("In");
  init(AIRSTACK_API_KEY?AIRSTACK_API_KEY:`${AIRSTACK_API_KEY}`);

  const fid = ctx.message?.requesterFid;


const provider = new ethers.JsonRpcProvider(process.env.BASE_SEPOLIA_RPC);
  //Points


  return {
    image: (
      <div
        tw='w-full h-full flex items-center justify-center'
        style={{
          backgroundImage: `url('https://social-rank.vercel.app/score.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "1180 590",
        }}
      >
        <span tw='text-[10rem] text-[#FFEEA3] ml-[35rem] text-wrap'>{rank}</span>
      </div>
    ),
    buttons: [
      <Button action='tx' target={`${VERCEL_URL}/tx`} post_url={`${VERCEL_URL}/tx-success`}>
        Claim
      </Button>,
      <Button action='post' target={`${VERCEL_URL}`}>
        Go Back
      </Button>,
    ],

  };
});

export const GET = handleRequest;
export const POST = handleRequest;
