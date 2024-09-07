
import { VERCEL_URL } from "@/consts";
import { createFrames, Button } from "frames.js/next";
import { gql, GraphQLClient } from "graphql-request";
import { init } from "@airstack/node";
import {ethers} from "ethers";
import {abi} from "../abi/abi";


const frames = createFrames({
  basePath: "/frames",
});

const handleRequest = frames(async (ctx) => {
  console.log("In");
  const fid = ctx.message?.requesterFid;

const provider = new ethers.JsonRpcProvider(process.env.BASE_SEPOLIA_RPC);
const contractAddress = '0xa8FA803df74999C27fb556Ff62e68F4077ACD451'; 
const contract = new ethers.Contract(contractAddress, abi, provider);

    let contestId = 1;
    const value = await contract.getContest(contestId); // Replace with your function name
    const contestCount = value[1];
    console.log("Test Status Value: ",value);

    if(contestCount == 2){
  return {
    image: (
      <div tw="flex flex-col p-5 items-center justify-center text-center w-full h-full bg-neutral-800">
        <div tw="flex items-center">
          <span tw="w-10 h-10 bg-emerald-500/20 rounded-full mr-4 items-center justify-center">
            <span tw="w-5 h-5 bg-emerald-500 rounded-full"></span>
          </span>
          <h1 tw="text-[4rem] text-neutral-200">Live Contest</h1>
        </div>
        <div tw="flex items-center bg-neutral-900 border border-neutral-600 rounded-[3rem] -mt-5 px-10 py-6">
          <div tw="flex flex-col mr-5">
            <div tw="flex items-center">
              <p tw="text-neutral-200 text-[2rem] mr-4">1.</p>
              <img
                src="https://github.com/shadcn.png"
                tw="w-14 h-14 rounded-full mr-4"
              />
              <h1 tw="text-[3rem] text-sky-300">@betashop.eth</h1>
            </div>
            <div tw="flex items-center">
              <p tw="text-neutral-200 text-[2rem] mr-4">2.</p>
              <img
                src="https://github.com/shadcn.png"
                tw="w-14 h-14 rounded-full mr-4"
              />
              <h1 tw="text-[3rem] text-sky-300">@wake</h1>
            </div>
          </div>
          <div tw="flex flex-col ml-5">
            <div tw="flex items-center">
              <p tw="text-neutral-200 text-[2rem] mr-4">3.</p>
              <img
                src="https://github.com/shadcn.png"
                tw="w-14 h-14 rounded-full mr-4"
              />
              <h1 tw="text-[3rem] text-sky-300">@jessepoolak</h1>
            </div>
            <div tw="flex items-center">
              <p tw="text-neutral-200 text-[2rem] mr-4">4.</p>
              <img
                src="https://github.com/shadcn.png"
                tw="w-14 h-14 rounded-full mr-4"
              />
              <h1 tw="text-[3rem] text-sky-300">@saumyasaxena</h1>
            </div>
          </div>
        </div>
      </div>
    ),
    buttons: [
        <Button action='post' target={`${VERCEL_URL}/confirmBet`}>
        1
      </Button>,
     <Button action='post' target={`${VERCEL_URL}/confirmBet`}>
        2
      </Button>,
      <Button action='post' target={`${VERCEL_URL}/getGames`}>
        Go Back
      </Button>,
    ],
    textInput:"Enter moxie to bet",
  }
}else if(contestCount == 3){
  return {
    image: (
      <div tw="flex flex-col p-5 items-center justify-center text-center w-full h-full bg-neutral-800">
        <div tw="flex items-center">
          <span tw="w-10 h-10 bg-emerald-500/20 rounded-full mr-4 items-center justify-center">
            <span tw="w-5 h-5 bg-emerald-500 rounded-full"></span>
          </span>
          <h1 tw="text-[4rem] text-neutral-200">Live Contest</h1>
        </div>
        <div tw="flex items-center bg-neutral-900 border border-neutral-600 rounded-[3rem] -mt-5 px-10 py-6">
          <div tw="flex flex-col mr-5">
            <div tw="flex items-center">
              <p tw="text-neutral-200 text-[2rem] mr-4">1.</p>
              <img
                src="https://github.com/shadcn.png"
                tw="w-14 h-14 rounded-full mr-4"
              />
              <h1 tw="text-[3rem] text-sky-300">@betashop.eth</h1>
            </div>
            <div tw="flex items-center">
              <p tw="text-neutral-200 text-[2rem] mr-4">2.</p>
              <img
                src="https://github.com/shadcn.png"
                tw="w-14 h-14 rounded-full mr-4"
              />
              <h1 tw="text-[3rem] text-sky-300">@wake</h1>
            </div>
          </div>
          <div tw="flex flex-col ml-5">
            <div tw="flex items-center">
              <p tw="text-neutral-200 text-[2rem] mr-4">3.</p>
              <img
                src="https://github.com/shadcn.png"
                tw="w-14 h-14 rounded-full mr-4"
              />
              <h1 tw="text-[3rem] text-sky-300">@jessepoolak</h1>
            </div>
            <div tw="flex items-center">
              <p tw="text-neutral-200 text-[2rem] mr-4">4.</p>
              <img
                src="https://github.com/shadcn.png"
                tw="w-14 h-14 rounded-full mr-4"
              />
              <h1 tw="text-[3rem] text-sky-300">@saumyasaxena</h1>
            </div>
          </div>
        </div>
      </div>
    ),
    buttons: [
        <Button action='post' target={`${VERCEL_URL}/confirmBet`}>
        1
      </Button>,
     <Button action='post' target={`${VERCEL_URL}/confirmBet`}>
        2
      </Button>,
       <Button action='post' target={`${VERCEL_URL}/confirmBet`}>
       3
     </Button>,
      <Button action='post' target={`${VERCEL_URL}/getGames`}>
        Go Back
      </Button>,
    ],
    textInput:"Enter moxie to bet",

  };
}else if(contestCount == 4){
  return {
    image: (
      <div tw="flex flex-col p-5 items-center justify-center text-center w-full h-full bg-neutral-800">
        <div tw="flex items-center">
          <span tw="w-10 h-10 bg-emerald-500/20 rounded-full mr-4 items-center justify-center">
            <span tw="w-5 h-5 bg-emerald-500 rounded-full"></span>
          </span>
          <h1 tw="text-[4rem] text-neutral-200">Live Contest</h1>
        </div>
        <div tw="flex items-center bg-neutral-900 border border-neutral-600 rounded-[3rem] -mt-5 px-10 py-6">
          <div tw="flex flex-col mr-5">
            <div tw="flex items-center">
              <p tw="text-neutral-200 text-[2rem] mr-4">1.</p>
              <img
                src="https://github.com/shadcn.png"
                tw="w-14 h-14 rounded-full mr-4"
              />
              <h1 tw="text-[3rem] text-sky-300">@betashop.eth</h1>
            </div>
            <div tw="flex items-center">
              <p tw="text-neutral-200 text-[2rem] mr-4">2.</p>
              <img
                src="https://github.com/shadcn.png"
                tw="w-14 h-14 rounded-full mr-4"
              />
              <h1 tw="text-[3rem] text-sky-300">@wake</h1>
            </div>
          </div>
          <div tw="flex flex-col ml-5">
            <div tw="flex items-center">
              <p tw="text-neutral-200 text-[2rem] mr-4">3.</p>
              <img
                src="https://github.com/shadcn.png"
                tw="w-14 h-14 rounded-full mr-4"
              />
              <h1 tw="text-[3rem] text-sky-300">@jessepoolak</h1>
            </div>
            <div tw="flex items-center">
              <p tw="text-neutral-200 text-[2rem] mr-4">4.</p>
              <img
                src="https://github.com/shadcn.png"
                tw="w-14 h-14 rounded-full mr-4"
              />
              <h1 tw="text-[3rem] text-sky-300">@saumyasaxena</h1>
            </div>
          </div>
        </div>
      </div>
    ),
    buttons: [
        <Button action='post' target={`${VERCEL_URL}/confirmBet`}>
        1
      </Button>,
     <Button action='post' target={`${VERCEL_URL}/confirmBet`}>
        2
      </Button>,
       <Button action='post' target={`${VERCEL_URL}/confirmBet`}>
       3
     </Button>,
     <Button action='post' target={`${VERCEL_URL}/confirmBet`}>
     4
   </Button>,
      <Button action='post' target={`${VERCEL_URL}/getGames`}>
        Go Back
      </Button>,
    ],
    textInput:"Enter moxie to bet",
  };
}
}


);

export const GET = handleRequest;
export const POST = handleRequest;
