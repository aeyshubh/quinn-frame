import { createFrames, Button } from "frames.js/next";
import { TransactionTargetResponse } from "frames.js";
import { gql, GraphQLClient } from "graphql-request";
import { encodeFunctionData, parseEther,encodePacked, stringToBytes  } from 'viem';
import { init } from "@airstack/node";
const AIRSTACK_API_URL = "https://api.airstack.xyz/graphql";
import {abi} from "../abi/abi";
import { NextResponse } from "next/server";
import { ethers } from "ethers";
const frames = createFrames({
    basePath: "/frames",
  });
export const POST = frames(async (ctx) => {

console.log("CTX",ctx);
  let contestId = 1;
  let data = ctx.searchParams;
  const fid = ctx.message?.requesterFid;
  const userChoice = data?.choise;
  const userBetAmount = data?.amt;
const contractAddress = '0xa8FA803df74999C27fb556Ff62e68F4077ACD451'; 

const provider = new ethers.JsonRpcProvider(process.env.BASE_SEPOLIA_RPC);
console.log("Choise :",userChoice);
console.log("Bet Amount :",userBetAmount);
let address = ctx.message?.connectedAddress;
  console.log("address :",address);
  // Do something with the request data to generate transaction data
 
  // Create calldata for the transaction using Viem's `encodeFunctionData`
   const myCalldata = encodeFunctionData({
    abi: abi,
    functionName: "getInContest",
    args: [contestId, userChoice, userBetAmount],
  });
 
  // Return transaction data that conforms to the correct type
  return NextResponse.json({
    chainId: "eip155:8453", // OP Mainnet
    method: "eth_sendTransaction",
    params: {
      abi: [],
      to: contractAddress,
      data: myCalldata,
      value: '0',
    },
  });
});
