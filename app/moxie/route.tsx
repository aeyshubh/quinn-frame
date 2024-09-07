
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
        <Button action='post' target={`${VERCEL_URL}/confirmBet`}>
        1
      </Button>,
     <Button action='post' target={`${VERCEL_URL}/confirmBet`}>
        2
      </Button>,
      <Button action='post' target={`${VERCEL_URL}`}>
        Go Back
      </Button>,
    ],

  };
}else if(contestCount == 3){
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
        <Button action='post' target={`${VERCEL_URL}/confirmBet`}>
        1
      </Button>,
     <Button action='post' target={`${VERCEL_URL}/confirmBet`}>
        2
      </Button>,
       <Button action='post' target={`${VERCEL_URL}/confirmBet`}>
       3
     </Button>,
      <Button action='post' target={`${VERCEL_URL}`}>
        Go Back
      </Button>,
    ],

  };
}else if(contestCount == 4){
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
      <Button action='post' target={`${VERCEL_URL}`}>
        Go Back
      </Button>,
    ],

  };
}
}


);

export const GET = handleRequest;
export const POST = handleRequest;
