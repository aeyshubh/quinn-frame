
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
